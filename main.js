/*global ReadAlong */
function annotateSong(song_id,markers){
    markers.push(markers[markers.length-1]+5);
    var words = $('.song'+song_id+'text').html().split(' ');
    var annotatedSong = $('.song'+song_id+'text').html("");
    $.each(words,function(id,word){
      var duration = markers[id+1]-markers[id];
      var new_word= '<span data-index="'+id+'" data-dur="'+duration+'" data-begin="'+markers[id]+'"> '+word+"</span>"
      annotatedSong.append(new_word);
    });
  }


  function attach_read_along(lyrics_element,audio_element){
          var args = {
              text_element: lyrics_element,
              audio_element: audio_element,
              autofocus_current_word: true
          };

          if (!args.audio_element.canPlayType) {
              // No error messaging is needed because error message appears in <audio> fallback
              throw new Error('HTML5 Audio not supported');
          }
          if (args.audio_element.networkState === args.audio_element.NETWORK_NO_SOURCE) {
              document.querySelector('.passage-audio-unavailable').hidden = false;
              throw new Error('Cannot play any of the available sources');
          }
  ``
          var supports_playback_rate = (function (audio) {
              if (typeof audio.playbackRate !== 'number' || isNaN(audio.playbackRate)) {
                  return false;
              }

              // For Opera, since it doesn't currently support playbackRate and yet
              // has it defined as 1.0, we can detect Opera support by changing
              // the playbackRate and see if the change sticks.
              var original_playback_rate = audio.playbackRate;
              audio.playbackRate += 1.0;
              var is_playback_rate_changed = (original_playback_rate !== audio.playbackRate);
              audio.playbackRate = original_playback_rate;
              return is_playback_rate_changed;
          }(args.audio_element));

          var new_read_along = jQuery.extend(true, {}, ReadAlong);
          new_read_along.init(args)

          readAlongs.push(new_read_along);

    }

    $('audio').on('ended', function() {
        $(this).next('audio').play();
        $('.speaking').removeClass('speaking')
    });

window.addEventListener('load', function (e) {
    window.readAlongs = []
    annotateSong( 4 , [1.8, 2.1, 2.3, 2.5, 3, 3.9, 5.5, 5.7, 6, 6.6, 6.9, 7.4, 10, 10.5, 12, 13, 13.4, 13.8, 14.4, 16.9,17.5, 17.9, 19.3, 20.3, 20.5, 22.1, 22.8, 23.2, 25, 26.3, 27.3, 30.8, 31, 31.5, 32, 32.4, 33.2, 34.5,34.8, 35.2, 35.4, 35.8, 36.3, 36.6, 37.1, 39.5, 39.7, 40.1, 40.6, 41.6, 42, 43]);
    annotateSong( 6 , [.1, .3, 1.3, 2.6, 2.9, 4.6, 5.1, 5.5, 5.9, 6.8, 7.4, 8.4, 10.7, 11.1, 12.2, 13.4, 13.6, 13.8, 13.9, 14.5, 14.8, 17.2, 17.6, 17.8, 18, 18.4, 19.5, 20.9, 23.7, 24.2, 24.9, 25.5, 26.3, 26.8]);
    annotateSong( 8 , [5, 5.3, 6.2, 6.85, 7.15, 7.45, 10, 10.6, 11.2, 11.8, 12.3, 12.5, 12.8, 13.7, 15.9, 16.2, 16.5, 16.8, 21.3, 21.6, 22.2, 22.5, 23.8, 24.3, 26.43, 26.68, 27.13, 27.55, 27.79, 28.1, 28.47]);
    annotateSong( 11 , [.37, .8, 1.55, 2.38, 2.62, 3.12, 5.86, 6.14, 6.28, 7.38, 8.15, 8.34, 8.57, 8.82, 10.18, 10.46, 10.64, 11.54, 11.81, 12.04, 14.93, 15.18, 15.36, 16.01, 17, 17.17, 17.43, 17.73, 20.5, 20.75, 20.98, 21.64, 21.9, 22.41, 22.64, 22.9, 26.46, 26.76, 26.97, 27.73, 27.97, 28.27, 28.46, 30.86, 31.3, 32.67, 33.52, 34.37, 34.61, 34.88, 36.7, 37.81, 38.53, 39.46, 39.69, 39.96, 41.03]);
    annotateSong( 14 , [.52, 1.31, 1.41, 1.96, 2.21, 3.23, 3.44, 3.84, 4.41, 4.99, 5.8, 5.96, 6.41, 6.66, 7.71, 7.96, 8.18, 8.77, 10.47, 11.2, 11.4, 11.86, 12.14, 13.33, 13.45, 13.81, 29.95, 30.34, 31.55, 31.76, 31.97, 32.62, 34.56, 34.82, 35.98, 36.3, 36.52, 36.9, 39.21, 39.6,  40.81, 42.76, 43.4]);
    annotateSong( 15 , [33.77, 34.11, 34.65, 35.18, 35.42, 36.16, 37.2, 38.18, 39.46, 39.62, 40.05, 40.24, 40.52, 41.02, 45.24, 45.41, 45.9, 46.45, 46.81, 47.27, 47.38, 47.87, 48.43, 48.97, 49.11, 49.26, 49.67, 49.98, 50.11, 51.19, 51.89, 52.12, 52.21, 52.74, 53.86, 54.86, 55.05, 55.24, 55.58, 55.89, 56.12, 56.62, 57.46, 57.62, 57.77, 58.44, 58.7, 58.86, 59.49, 60.12, 60.32, 60.45, 61.14,  61.98, 62.13, 62.34, 62.67, 84.04, 84.36, 84.7, 86.46, 87.56, 88.01, 88.35, 88.93, 91.93, 92.40, 92.85, 96.16]);
    annotateSong( 29 , [2.48, 2.99, 3.2, 3.44, 3.63,  4.53, 4.76, 5.15, 5.41, 7.18,  7.34, 8.03, 9.44, 9.99, 10.16, 10.47, 11.44, 11.67, 11.86, 12.14, 14.44, 14.66, 15.8, 15.98, 17.13, 17.37, 17.82, 18.54, 19.82, 20.4, 20.62, 20.84, 21.05, 21.56, 22.35, 22.6, 22.87, 23.26, 24.81, 25.38, 25.57, 25.8, 26.08, 26.48, 27.49, 27.75, 28.01, 28.49, 31.96, 33.13, 34.22, 34.55, 34.99, 37.01, 37.9, 38.27, 38.47, 40.54, 41.48, 42, 42.26, 44.34, 45.29, 45.44, 46.25, 49.48, 50.38, 50.67, 51.41, 51.95, 54.41, 55.13, 55.32, 56.07, 56.57, 57.97, 58.21]);
    annotateSong( 47 , [1.84, 2.51, 3.13, 3.98, 4.09, 4.3, 4.63, 4.75, 5.22, 7.85, 8.43, 9.07, 9.45, 9.66, 11.68, 11.78, 11.97, 12.44, 12.63, 13.07, 13.35, 15.71, 16.31, 16.52, 17.02, 17.35, 17.38, 17.78, 18.03, 20.57, 20.97, 21.2, 21.63, 21.98, 22.37, 24.51, 24.73, 25.21, 25.75, 26.63, 28.88, 29.4, 30.08]);
    annotateSong( 51 , [.51, .76, 1.31, 1.99, 2.26, 2.45, 3.25, 3.44, 3.59, 4.3, 4.59, 6.79, 7.07, 7.27, 7.96, 8.23, 9.62, 9.76, 9.92, 10.44, 10.9, 13.24, 13.66, 13.85, 14.23, 14.95, 15.64, 16.03, 16.81, 17.11, 18.05, 18.21, 19.03, 19.23, 20.08, 20.29, 21.35, 22.08, 22.32, 23.14, 23.34, 24.07, 24.41]);
    annotateSong( 55 , [39.12, 39.92, 40.4, 41.21, 41.9, 42.62, 44.31, 44.43]);
    annotateSong( 65 , [.69, .82, 1, 1.46, 1.78, 1.9, 2.03, 2.17, 2.34, 2.55, 3.18, 3.48, 3.6, 4.2, 4.44, 4.66, 4.9, 5.13, 5.26, 5.43, 15.94, 16.24, 16.72, 16.93, 17.07, 17.33, 17.5, 23.48, 23.89, 24.15, 24.38, 24.53, 29.01, 29.44, 29.76, 30.05, 30.17, 30.4, 31.41, 31.73, 31.87, 35.3, 35.56, 35.72, 35.9, 36.88, 37.5, 37.6, 37.68, 38.14, 38.25, 38.41, 41.79, 41.98, 42.19, 42.33, 42.45, 46.93, 47.88, 48.02, 48.2, 48.6, 53.54, 53.93, 54.21, 54.33, 54.53, 54.74, 61.03, 61.18, 61.7, 61.91, 62.26, 62.47, 62.7, 62.88, 63.14]);
    annotateSong( 66 , [70.08, 70.3, 70.39, 70.52, 70.64, 70.9, 71.07, 71.21, 71.65, 72.74, 73.27, 74.39, 74.71, 75.03, 75.25, 75.83, 76.02, 76.15, 76.28, 76.48, 76.66, 76.81, 78.24]);
    annotateSong( 71 , [ 1.19, 3.85, 6.47, 9.1, 11.75, 14.79, 17.48, 20.19, 22.85, 23.16, 24.07, 24.26, 25.9, 26.07, 26.45, 26.74, 27.04, 29.35, 29.51, 29.92, 30.16, 30.45, 31.11, 31.56, 31.74, 32.87, 33.19, 35.26,  35.99, 36.37, 36.62]);
    annotateSong( 76 , [ 1, 1.69, 2.65, 4.04, 4.42, 5.19, 5.52, 6.25, 9.79, 10.38, 11.46, 12.09, 12.84, 13.99, 14.38, 15.24, 15.63, 16.49, 20.07, 20.89, 22.04, 22.66, 23.37, 24.24, 26.26, 27.29, 28.1, 28.56, 29.73, 32.65, 33.29, 34.29, 35.37, 36.24, 37, 37.3]);
    annotateSong( 77 , [8.81, 9.77, 10.67, 11.04, 11.87, 12.24, 16.54, 17.43, 17.67, 18.46, 18.76, 19.98, 20.85, 23.09, 23.34, 23.82, 24.12, 25.93, 26.56, 30.02, 30.45, 30.88, 34.44, 35.12, 38.81, 39.64, 40.44,  40.87, 43.74, 44.47, 44.8, 45.71, 45.98, 46.81, 47.6, 49.18, 49.93, 50.24, 51.07, 51.8, 54.34, 54.79, 55.4, 55.95, 56.98]);
    annotateSong( 79 , [.93, 1.76, 3.18, 4.29, 5.7, 6.38, 7.44, 9.77, 10.26, 11.51, 12.71, 14.47, 14.84, 15.66, 16.27, 18.12, 18.89, 20.21, 20.95, 21.66, 21.97, 22.45, 22.95, 24.25, 25.14, 25.79, 27.37, 27.75, 30.27, 31.05,  31.81, 34.34, 35.09, 35.95, 38.48, 39.34, 40.19, 42.63, 43.44, 44.69, 45.48]);
    annotateSong( 80 , [3.69, 5.01, 6.93, 7.56, 8.3, 8.96, 9.6, 10.59, 11.32, 12.45, 13.12, 14.3, 15.2, 15.4, 17.13, 18.3, 19.85, 20.25, 21.32, 22.45, 22.87, 24.6, 25.02, 26.41, 26.98, 27.23, 30.34, 31.47, 31.89, 33.38, 37.36, 37.64, 38.03, 39.45, 40.27, 41.16, 42.74, 43.53, 45.75, 45.98, 46.37, 46.67, 49.07, 51.04, 51.4, 52.12, 52.4, 54.38, 57.16, 58.1, 59.08, 62.11, 62.46, 62.9, 64.08, 64.46, 65, 66.81, 67.21, 67.69, 68.24, 68.45]);

    //attach_read_along(document.querySelector('.song1text'),document.querySelector('.song1audio'))
    attach_read_along(document.querySelector('.song1text'),document.querySelector('.song1audio'))
    attach_read_along(document.querySelector('.song4text'),document.querySelector('.song4audio'))
    attach_read_along(document.querySelector('.song6text'),document.querySelector('.song6audio'))
    attach_read_along(document.querySelector('.song8text'),document.querySelector('.song8audio'))
    attach_read_along(document.querySelector('.song11text'),document.querySelector('.song11audio'))
    attach_read_along(document.querySelector('.song14text'),document.querySelector('.song14audio'))
    attach_read_along(document.querySelector('.song15text'),document.querySelector('.song15audio'))
    attach_read_along(document.querySelector('.song29text'),document.querySelector('.song29audio'))
    attach_read_along(document.querySelector('.song47text'),document.querySelector('.song47audio'))
    attach_read_along(document.querySelector('.song51text'),document.querySelector('.song51audio'))
    attach_read_along(document.querySelector('.song55text'),document.querySelector('.song55audio'))
    attach_read_along(document.querySelector('.song65text'),document.querySelector('.song65audio'))
    attach_read_along(document.querySelector('.song66text'),document.querySelector('.song66audio'))
    attach_read_along(document.querySelector('.song71text'),document.querySelector('.song71audio'))
    attach_read_along(document.querySelector('.song76text'),document.querySelector('.song76audio'))
    attach_read_along(document.querySelector('.song77text'),document.querySelector('.song77audio'))
    attach_read_along(document.querySelector('.song79text'),document.querySelector('.song79audio'))
    attach_read_along(document.querySelector('.song80text'),document.querySelector('.song80audio'))


    document.body.classList.add('initialized');
    document.querySelector('.loading').hidden = true;
}, false);
