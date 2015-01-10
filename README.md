Filesystem for Orion
====================

The filesystem module is a unified upload system that keep track
of all the files that are uploaded to orion and use any provider
you want.

http://orion.meteor.com/docs/filesystem

![alt tag](http://i.imgur.com/Rl3Mpvi.jpg)

> Orion is a simple and useful cms for meteor. 
Creates automatically a admin panel for 
your collections and gives you the ability 
to have key/value definitions for your site.

> More info on http://orion.meteor.com

## Getting Started

If you have installed packages that uses **orionjs:filesystem** like 
**orionjs:summernote** or **orionjs:image-attribute** you don't have
to install this

```sh
meteor add orionjs:filesystem
```

### Uploading to S3 

You can upload your files easily to AWS S3.
Read the instructions [here](https://github.com/orionjs/s3)

## Creating a Provider

You can setup a provider and orion will automatically upload 
all the files through this, including packages upload functions
like **orionjs:summernote**

### Provider Upload

```js
orion.filesystem.providerUpload(options, success, failure)
``` 

- ```option``` **Object**. Attribute that will contain information about the upload.
But the only important thing is ```option.fileList```, which is equivalent
to ```$(".fileinput")[0].files```. It only contains one file.

- ```success(publicUrl, [meta])``` **Function**. When the file is uploaded call this function so orion
can register the file in the database and we can see it in the admin.

	- ```publicUrl``` **String**. The url of the uploaded file.

	- ```meta``` **Object**. A object containing whatever you want. For example 
	you can save here the local path of the file.

- ```failure(error)``` **Function**. If the upload fails call this function.
	
	- ```error``` **Object**. The upload error description.

Example: 

```js
// Official S3 Upload Provider
orion.filesystem.providerUpload = function(options, success, failure) {
	S3.upload(options.fileList, "/orionjs", function(error, result) {
		if (error) {
			failure(error);
		} else {
			success(result.url, { s3Path: result.relative_url });
		}
    	
    });
}
```

### Provider Remove

```js
orion.filesystem.providerRemove(file, success, failure)
``` 

- ```file``` **Object**. The object representing the file.

- ```success()``` **Function**. When the file is removed call this function so orion
can delete the file from the database.

- ```failure(error)``` **Function**. If the remove fails call this function.
	
	- ```error``` **Object**. The remove error description.

Example: 

```js
// Official S3 Remove Provider
orion.filesystem.providerRemove = function(file, success, failure)  {
	S3.delete(file.meta.s3Path, function(error, result) {
		if (error) {
			failure(error);
		} else {
			success();
		}
	})
}
```

## Uploading Files Through Filesystem

If you want to make an extension for orion and
you need to upload files, you **must** use this.

Example:

```js
orion.filesystem.upload({
    fileList: fileInput[0].files, 
    name: 'file.txt', 
    folder: 'my-extension-files', 
    canRemove: true // Can the admin delete manually the files
}, function(file, error) {
    if (!error) {
        console.log(file, "file uploaded")
    } else {
        console.log(error, "error uploading file")
    }
});
```

### Removing Files

Example:

```js
var fileId = 'The id of the file';
orion.filesystem.remove(fileId, function(error) {
	if (!error) {
		console.log('File removed');
	}
});
```
