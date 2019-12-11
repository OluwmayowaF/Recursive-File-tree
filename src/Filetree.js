import React, { Component } from 'react'

export class Filetree extends Component {

    state = {
        selectedFolder:[]
    }

    //Function handles click actions on the folders
    handleSelectedFolder = (selected, level) => {
        return () => {
           let index = this.state.selectedFolder.indexOf(selected)
           //Check if folder has already been selected, if yes delete entry from state to rerender component display 
            if(index > -1  ){
                 delete this.state.selectedFolder[index];
                 const updatedArray =   this.state.selectedFolder
                    this.setState({
                         selectedFolder: updatedArray
                         });
                 
                    }
          // Add Selected folder index and name(unique identifier) to the state array 
            else{
               
             const updatedArray = this.state.selectedFolder.slice(0);
                   updatedArray[level] = selected;  
                   this.setState({
                        selectedFolder: updatedArray
                        });
                       }  
                }
      };
  
// Recursive Component Function 
    fileTree = (root, level=0, updatedLevel, selected) => {
        const icon = root.type === 'dir' ? <i className='fa fa-folder'></i> : <i className='fa fa-file'></i>
        const clickable = root.type === 'dir' ? this.handleSelectedFolder(root.name, level): null
        //const dynamicClass = root.type === 'dir' ? 'node' : 'dir-expand'
            return (
               <React.Fragment>
               <div className='node'>
                    <div className='dir-expand' onClick={clickable}>
                        {icon}{' '}
                        {root.name}
                    </div>
                </div>
               
                 <ul> 
                   {/*Base component*/}
                 {root.type === 'dir' &&  this.state.selectedFolder[level]===root.name ?
                     root.children.map((c, index)  => 
                      (<React.Fragment key={index + 1}>
                          {this.fileTree(c, index+1)} 
                      </React.Fragment>)):null
                 }
                 </ul>
                 </React.Fragment> 
            )
          
       
    }
    // Render File tree  
    render() {
        return (
            <React.Fragment>
                {this.fileTree(this.props.root)}
            </React.Fragment>
        )
    }
}

export default Filetree
