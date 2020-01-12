module.exports = function (grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    less: {
      style: {
        files: {
          "source/css/style.css": "source/less/style.less"
        }
      }
    },
    postcss: {
      style: {
        options: {
          processors:[
            require("autoprefixer")()
          ]
        },
        src: "source/css/*.css"
      }
    },
    watch: {
      style: {
        files: ["source/less/**/*/less"],
        tasks: ["less", "postcss"]
      }
    },
    browserSync: {
      server: {
        bsFiles: {
          src: ["source/*.html", "source/css/*.css"]
        },
        options: {
          server: "source/"
        }
      }
    },
    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "source/css/style.min.css": ["source/css/style.css"]
        }
      }
    },
    imagemin: {
      options: {
        images: {
          optimizationLevel: 3,
          progressive: true
        },
        files: [{
          expand: true,
          src: ["source/img/**/*.{png,jpg,svg}"]
        }]
      }
    },
    cwebp: {
      images: {
        options: {
          q: 90
        },
        files: [{
          expand: true,
          src: ["source/img/**/*.{png,jpg}"]
        }]
      }
    }
  });
};
