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
    annotateSong( 6 , [.1, .3, 1.3, 2.6, 2.9, 4.6, 5.1, 5.5, 5.9, 6.8, 7.4, 8.4, 10.7, 11.1, 12.2, 13.4, 13.6, 13.8, 13.9, 14.5, 14.8, 17.2, 17.6, 17.8, 18, 18.4, 19.5, 20.9, 23.7, 24.2, 24.9, 25.5, 26.3, 27]);
    annotateSong( 8 , [5, 5.3, 6.2, 6.85, 7.15, 7.45, 10, 10.6, 11.2, 11.8, 12.3, 12.5, 12.8, 13.7, 15.9, 16.2, 16.5, 16.8, 21.3, 21.6, 22.2, 22.9, 23.8, 24.3, 26.6, 26.8, 27.1, 27.5,  27.8, 28.1, 28.5]);


    //attach_read_along(document.querySelector('.song1text'),document.querySelector('.song1audio'))
    attach_read_along(document.querySelector('.song1text'),document.querySelector('.song1audio'))
    attach_read_along(document.querySelector('.song4text'),document.querySelector('.song4audio'))
    attach_read_along(document.querySelector('.song6text'),document.querySelector('.song6audio'))
    attach_read_along(document.querySelector('.song8text'),document.querySelector('.song8audio'))

    document.body.classList.add('initialized');
    document.querySelector('.loading').hidden = true;
}, false);
