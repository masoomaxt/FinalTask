import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { SERVER_LINK } from "../Constants";
import axios from "axios"
const Deletebookmark = () => {
    var { id } = useParams();
    let navigate = useNavigate();
    let [bookmark, setbookmark] = useState();

    async function deletebookmarkById() {
        let response = await fetch(`${SERVER_LINK}/bookmarks/remove/${id}`)
        console.log(response)
        navigate("/bookmarks")
    }

    function backTobookmarkPage() {
        navigate("/bookmarks")
    }

    useEffect(() => {
        async function getbookmark() {
            try {
                const response = await axios.get(`${SERVER_LINK}/bookmarks/search/${id}`)
                setbookmark(response.data.bookmark)
            } catch (err) {
                console.log(err)
            }

        }
        getbookmark()
    }, [])

    return (
        <div className="container col-md-4 col-sm-4 col-xs-12 col-lg-4 my-3 ">
            <h1></h1>
            {bookmark && <div className="card">
                <div className="card-header">
                    <h3 className="card-title text-center">
                        Delete bookmark
                    </h3>
                </div>
                <div className="card-body text-center">
                    <div>
                        <p><b>Title:</b> {bookmark.title}</p>
                        <p><b>Description:</b> {bookmark.description ? bookmark.description : "N/A"} </p>


                    </div>
                    <div className="d-flex justify-content-center">
                        <button onClick={backTobookmarkPage} className="btn btn-secondary  mx-2">
                            Cancel
                        </button>
                        <button onClick={deletebookmarkById} className="btn btn-danger"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>}
        </div>
    )
}
export default Deletebookmark