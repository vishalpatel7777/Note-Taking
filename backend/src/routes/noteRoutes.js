import express, { Router } from "express";
import { getAllNotes, createNote, deleteNote, updateNote ,getNoteById } from "../controllers/notesController.js";

const router = express.Router();

router.get('/', getAllNotes);
router.get('/:id', getNoteById);
router.post("/"  ,createNote );
router.put("/:id"  ,updateNote);
router.delete("/:id"  , deleteNote);

// app.get('/api/notes' , (req,res)=> {
//     // send the notes
//     res.status(200).send("you get 20 notes"); 
// });

// app.post("api/notes"  , (req, res)=>{
//     res.status(201).json({message: "note created successfully..."});
// })

// app.put("api/notes/:id"  , (req, res)=>{
//     res.status(200).json({message: "ntoe updated successfully..."});
// })

// app.delete("api/notes/:id"  , (req, res)=>{
//     res.status(200).json({message: "note deleted successfully..."});
// })


export default router ; 