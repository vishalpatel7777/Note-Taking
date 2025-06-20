import Note from "../models/note.js";

export async function getAllNotes(_ , res) {
  try {
    const notes = await Note.find().sort({createdAt: -1});
    res.status(200).json(notes);
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ message: "internal issue" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title: title, content: content });
    const saveNoted = await newNote.save();
    res
      .status(201)
      .json({ message: "Note crerated successfully ", details: saveNoted });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ message: "internal issue" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    // console.log("request body: " , req.body);
    const updatenote = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
    });
    if (!updatenote) return res.status(404).json({ message: "note not found" });
    res.status(200).json({ message: "note updated ", details: updatenote });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ message: "internal issue" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletenote = await Note.findByIdAndDelete(req.params.id);
    if (!deletenote) return res.status(404).json({ message: "note not found" });
    res.status(200).json({ message: "note deleted successfully..." });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ message: "internal issue" });
  }
}

export async function getNoteById (req,res) {
    try {
        const getnotebyid = await Note.findById(req.params.id);
        if(!getnotebyid) return res.status(404).json({message: "note not found"});
        res.status(200).json({message:"note found" , details: getnotebyid});
        
    } catch (error) {
        console.error("error", error);
    res.status(500).json({ message: "internal issue" });
    }
}