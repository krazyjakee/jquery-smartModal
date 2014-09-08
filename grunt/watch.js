module.exports = {
  gruntfile: {
    files: 'Gruntfile.js',
    tasks: ['jshint:gruntfile']
  },
  scripts: {
    files: 'src/js/jquery.smartModal.js',
    tasks: ['jshint', 'uglify']
  }
};
