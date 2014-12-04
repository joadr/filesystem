Template.adminShowFiles.helpers({
  // Returns an image if the file is jpg/gif/png
  fileType: function(fileURL) {
    if ((fileURL.indexOf('.png') > 0) ||
      (fileURL.indexOf('.jpg') > 0) ||
      (fileURL.indexOf('.jpeg') > 0) ||
      (fileURL.indexOf('.gif') > 0) ||
      (fileURL.indexOf('.bmp') > 0)) {
      return '<img src="'+fileURL+'" alt="">';
    } else {
      // return the full url if not an image
      return fileURL;
    }
  }
});
