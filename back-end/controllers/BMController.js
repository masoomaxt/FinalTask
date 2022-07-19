const { default: mongoose } = require("mongoose");
const Bookmarkschema = require("../models/Bookmarkschema");

exports.createBookmark = async (req, res, next) => {
    const { name, link,picture} = req.body;
    try {
        const Bookmark = await Bookmarkschema.create({  name, link,picture });
        res.status(200).json({
            success: true,
            Bookmark
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            success: false,
            msg: "The Bookmark Creation Failed"
        })
    }
}
// Get All Bookmarks 
exports.getAllBookmarks = async (req, res, next) => {
    const AllBookmarks = await Bookmarkschema.find().populate("name");
    res.status(200).json({
        success: true,
        Bookmarks: AllBookmarks
    })
}

// remove Bookmark
exports.removeBookmark = async (req, res, next) => {
    Bookmarkschema.findById(req.params.id, (err, result) => {
        if (!result) {
            res.status(404).send("Bookmark Not Found");
        } else {
            Bookmarkschema.findByIdAndRemove(req.params.id)
                .then(function () {
                    res.status(200).json("Bookmark deleted");
                })
                .catch(function (err) {
                    res.status(400).send("Bookmark delete failed.");
                });
        }
    });
}

// find/search Bookmark by id
exports.findBookmarkById = async (req, res, next) => {
    try {
        const Bookmark = await Bookmarkschema.findById(req.params.id);
        // res.status(200).json(Bookmark)

        res.status(200).json({
            success: true,
            Bookmark: Bookmark
        })
    } catch (err) {
        console.log(err)
    }


}
exports.findBookmarkByName = async (req, res, next) => {
    const { name } = req.params;
    const Bookmark = await Bookmarkschema.find({ name: name });
    res.status(200).json({
        success: true,
        Bookmark: Bookmark
    })
}

// Update Bookmark
exports.updateBookmark = async (req, res) => {
    let { picture, name, link } = req.body;
    let id = req.params.id;

    Bookmarkschema.findByIdAndUpdate({ _id: id }, { $set: { picture, name, link } })
        .then(function () {
            res.json("Bookmark updated");
        })
        .catch(function (err) {
            res.status(422).send("Bookmark update failed.");
        });
}