const Home = () => {
    const link = "https://github.com/ABIDULLAH786";
    const target = "_blank";

    class BookmarkList extends React.Component {
        render() {
          const { bookmark, deleteBookmark, updateBookmarks } = this.props;
      <h1>Add a Bookmark</h1>
          return (
            <tr className="bookmark-wrapper">
              <td>
                {bookmark.isEditOn ? (
                  <form onSubmit={(e) => props.handleSubmit(e)}>
                    <input
                      type="text"
                      onChange={(e) => props.handleChange(e)}
                      defaultValue={bookmark.picture}
                    />
                    <input type="submit" />
                  </form>
                ) : (
                  bookmark.picture
                )}
              </td>
              <td>
                <a href={bookmark.url} target="_blank">
                  {bookmark.url}
                </a>
              </td>
              <td onClick={() => deleteBookmark(bookmark._id, index)}>
                <i class="fas fa-trash-alt"></i>
              </td>
      
              <td onClick={() => updateBookmarks(bookmark)}>
                <i class="fas fa-pencil-alt"></i>
              </td>
            </tr>
          );
        }
      }
      
      class App extends React.Component {
        state = {
          picture: "",
          url: "",
          bookmarks: [],
        };
      
        componentDidMount() {
          this.getData();
        }
      
        getData = () => {
          fetch("/bookmarks")
            .then((response) => response.json())
            .then((data) => this.setState({ bookmarks: data }));
        };
      
        handleChange = (event) => {
          this.setState({ [event.target.id]: event.target.value });
        };
      
        handleSubmit = (event) => {
          event.preventDefault();
      
          fetch("/bookmarks", {
            body: JSON.stringify({
              picture: this.state.picture,
              url: this.state.url,
            }),
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
          })
            .then((createBookmark) => createBookmark.json())
            .then((newBookmark) => {
              this.setState({
                picture: "",
                url: "",
                bookmarks: [newBookmark, ...this.state.bookmarks],
              });
            })
            .catch((error) => console.log(error));
        };
      
        deleteBookmark = (id, index) => {
          console.log(id, index);
          fetch(`/bookmarks/${id}`, {
            method: "DELETE",
          }).then((data) => {
            this.setState({
              bookmarks: [
                //Slicing everything before and after the name to be deleted
                ...this.state.bookmarks.slice(0, index),
                ...this.state.bookmarks.slice(index + 1),
              ],
            });
          });
        };
      
        updateBookmarks = (bookmark) => {
          bookmark.isEditOn = !bookmark.isEditOn;
      
          console.log(bookmark.isEditOn);
      
          fetch(`bookmarks/${bookmark._id}`, {
            body: JSON.stringify(bookmark),
            method: "PUT",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              this.getData();
            });
        };
      
        render() {
          return (
            <div className="bookmark-container">
              <div className="main-picture">
                <h1>Bookmarks</h1>
              </div>
      
              <div>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    value={this.state.picture}
                    id="picture"
                    onChange={this.handleChange}
                    placeHolder="Site Name"
                  />
                  <input
                    type="text"
                    value={this.state.url}
                    id="url"
                    onChange={this.handleChange}
                    placeHolder="Site URL: https://"
                  />
      
                  <input type="submit" />
                </form>
              </div>
      
              <div className="table-container">
                <table>
                  <thead>
                    <th>Site picture</th>
                    <th>Visit Site</th>
                    <th className="danger">Remove</th>
                    <th className="danger">Edit</th>
                  </thead>
                  <tbody>
                    {this.state.bookmarks.map((bookmark, i) => {
                      return (
                        <BookmarkList
                          bookmark={bookmark}
                          index={i}
                          deleteBookmark={this.deleteBookmark}
                          updateBookmarks={this.updateBookmarks}
                          handleChange={this.handleChange}
                          handleSubmit={this.handleSubmit}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }
      }
      
      ReactDOM.render(<App />, document.querySelector(".container"));
      
}
export default Home