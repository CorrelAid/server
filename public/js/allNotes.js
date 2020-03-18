/* eslint-env browser, jquery */
/* eslint no-console: ["error", { allow: ["warn", "error", "debug"] }] */
/* global serverurl */

export function getAllNotes (callback) {
  $.get(`${serverurl}/allNotes`)
    .done(data => {
      if (data.allNotes) {
        callback(data.notesSortedByTag)
      }
    })
    .fail((xhr, status, error) => {
      console.error(xhr.responseText)
    })
}


export function parseServerToAllNotes (list, callback) {
  $.get(`${serverurl}/allNotes`)
    .done(data => {
      if (data.allNotes) {
        callback(list, data.notesSortedByTag)
      }
    })
    .fail((xhr, status, error) => {
      console.error(xhr.responseText)
    })
}
