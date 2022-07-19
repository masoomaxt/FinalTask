import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SERVER_LINK } from "../Constants";

const UpdateBookmark = (props) => {
    const { id } = useParams();
    const [BookmarkId, setBookmarkId] = useState("");
    const [picture, setpicture] = useState("");
    const [name, setname] = useState(0);
    const [link, setlink] = useState("");

    let navigate = useNavigate();


    function fillData(data) {
        setBookmarkId(data._id)
        setpicture(data.picture)
        setname(data.name)
        setlink(data.link)
    }
    useEffect(() => {
        async function getBookmark() {
            try {
                const response = await axios.get(`${SERVER_LINK}/Bookmarks/search/${id}`)
                fillData(response.data.Bookmark);
            } catch (err) {
                console.log(err)
            }

        }
        getBookmark()
    }, [])

    const handleSubmit = async (event) => {

        event.preventDefault();
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ _id: BookmarkId, picture: picture, name: name, link: link })
        };
        const response = await fetch(`${SERVER_LINK}/Bookmarks/update/${id}`, requestOptions);
        if (response.status === 200)
            navigate("/Bookmarks");

    }
    return (
        <div className="container col-md-4 col-sm-4 col-xs-12 col-lg-4 my-5 border">
            <h1 className="text-center my-3">Update Bookmark Details</h1>
            <div>

                <div className="">
                    <form onSubmit={handleSubmit} className="px-4 py-3">
                        
                        <div className="form-group my-4">
                            <label htmlFor="name">name</label>
                            <input type="number"
                                className="form-control"
                                id="name"
                                placeholder="0"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                            />
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="name">Link</label>
                            <textarea
                                className="form-control"
                                id="anme"
                                placeholder="Write link..."
                                value={Link}
                                onChange={(e) => setlink(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="picture"></label>
                            <input type="image"
                                className="form-control"
                                id="picture"
                                placeholder="picture"
                                value={picture}
                                onChange={(e) => setPicture(e.target.value)}
                            />
                        </div>

                        <button className="btn btn-primary w-100">Update Bookmark</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default UpdateBookmark