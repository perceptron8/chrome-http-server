/*global module:false*/
module.exports = function(grunt) {
	grunt.initConfig({
		copy : {
			main : {
				files : [ {
					src : "src/manifest.json",
					dest : "build/manifest.json"
				} ]
			}
		},
		browserify : {
			main : {
				src : "src/background.js",
				dest : "build/background.js",
				options : {
					alias : [
						"chrome-net:net",
						"http-node:http"
					],
					exclude : [
						"http"
					]
				}
			}
		}
	});
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-browserify");
	grunt.registerTask("default", [ "copy", "browserify" ]);
};
