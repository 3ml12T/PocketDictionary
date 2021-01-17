const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Word = new Schema (
{
    word_title: {
        type: String
    },
    word_definition: {
        type: String
    },
    word_translation: {
        type: String
    },
    word_translation_language: {
        type: String
    },
}
)