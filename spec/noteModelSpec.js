// decribe ('Note', function () {
//   var newNote = new Note ('this is a note')

//   expect(newNote.showText()).toEq('this is a note')
// })

// (function (exports) {
//   function noteHasTextWhenCreated () {
//     var newNote = new Note('this is a note')
//     return assert.isTrue(newNote.showText() === 'this is a note')
//   }
//   exports.noteHasTextWhenCreated = noteHasTextWhenCreated
// })(this)

// console.log(noteHasTextWhenCreated())

describe('Note', () => {
  it('has text upon creation', () => {
    var newNote = new Note('this is a note')
    expect(newNote.showText()).toEq('this is a note')
  })
})

describe('test fail color', () => {
  it('fails a test', () => {
    expect(1).toEq(2)
  })
})
