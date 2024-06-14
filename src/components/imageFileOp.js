import React from "react";

const RNFS = require('react-native-fs'); 

//move the image attachment to app folder
export const MoveAttachment = async (filePath, newFilepath, dirPicutures, callback) => {
    return new Promise((resolve, reject) => {
        RNFS.mkdir(dirPicutures)
        .then(() => {
            RNFS.moveFile(filePath, newFilepath)
            .then(() => {
                //console.log('FILE MOVED', filePath, newFilepath);
                callback(true);
                resolve(true);
            })
            .catch(error => {
                console.log('moveFile error', error);
                reject(error);
            });
        }) 
        .catch(err => {
            console.log('mkdir error', err);
            reject(err);
        });
    });
};

// delete image file
export const DeleteImgFile = async(filePath) => {
    RNFS.exists(filePath)
    .then(result=> {
        //console.log("File exists:"+result);

        if(result) {
            return RNFS.unlink(filePath)
                    .then(()=> {
                        console.log('File deleted!');
                    })
                    .catch(error=> {
                        console.log(error.message);
                    });
        }
    })
    .catch(error=> {
        console.log(error.message);
    });
}