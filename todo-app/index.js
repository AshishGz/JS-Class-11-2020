let MY_NOTE='_my_note';
let eng_month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
let my_notes=localStorage.getItem(MY_NOTE)?
    JSON.parse(
    localStorage.getItem(MY_NOTE)):[];
window.onload=function () {
  onGetSavedNotes(my_notes);
};
function onAddNote() {
    let myNote=
        document.
        getElementById('note').value;
    let note={};
    note.value=myNote;
    note.date=new Date();
    note.id=new Date().getTime();
    my_notes.push(note);
    localStorage.setItem(MY_NOTE,
        JSON.stringify(my_notes));
    document.
    getElementById('note').value='';
    onGetSavedNotes(my_notes);
}

function onGetSavedNotes(notes) {
    let my_notes_html='';
    notes.forEach(function (val,index) {
        if(val) {
            my_notes_html = my_notes_html +
                `<div>
                 <p>${getUserReadableDate(val.date)}</p>
                <p>${val.value}</p>
                <div class="delete" onclick="deleteNote(` + index + `)">Delete</div>
                </div>`
        }
    });
    document.getElementById('myNotes')
        .innerHTML=my_notes_html;


}

function getUserReadableDate(date) {
    let readableDate=new Date(date);
   // 11 NOv 2019 2:30
    return readableDate.getDate()+' '+eng_month[readableDate.getMonth()]
    +' '+readableDate.getFullYear()+' '+readableDate.getHours()+':'
    +readableDate.getMinutes();

}
function deleteNote(index) {
    delete my_notes[index];
    localStorage.setItem(MY_NOTE,JSON.stringify(my_notes));
    onGetSavedNotes(my_notes);

}

function onSearchItem() {
let search_key=document.getElementById('searchText').value;
let newArray=my_notes.filter(
    note=>note.value.toLowerCase().indexOf(search_key)!=-1);
    onGetSavedNotes(newArray);
console.log(my_notes);
}
function clearSearch() {
    onGetSavedNotes(my_notes);
}



