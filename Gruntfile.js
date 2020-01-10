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
    }
  });
};
