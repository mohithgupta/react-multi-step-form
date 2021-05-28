import React, { Component } from 'react'
import {DropzoneDialog} from "material-ui-dropzone"
import {Box, Button} from "@material-ui/core"

export default class ImageUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            files: []
        };
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    handleSave(files) {
        this.setState({
            files: files,
            open: false
        });
    }

    handleOpen() {
        this.setState({
            open: true,
        });
    }

    render() {
        return (
            <div>
                <Box pt={1} pl={1}>

                <Button 
                    onClick={this.handleOpen.bind(this)}
                    variant="outlined"
                    color="primary"> Upload Logo </Button>

                </Box>
                
                <DropzoneDialog
                    open={this.state.open}
                    onSave={this.handleSave.bind(this)}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/jpg', 'image/bmp']}
                    showPreviews={true}
                    maxFileSize={500000}
                    onClose={this.handleClose.bind(this)}
                    file={this.state.files}
                />

            </div>
        );
    }
}