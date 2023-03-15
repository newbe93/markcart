import BookmarkCategory from "./BookmarkCategory";

function MainContent() {
  return (
    <div className="main-content">
      <button className="side-bar-button">열림</button>
      <div className="container">
        <h2>MarkCart</h2>
        <div>
          <input placeholder="북마크 찾기"></input>
          <button>찾기</button>
        </div>
        <div className="bookmark-area">
          <div className="row">
            <BookmarkCategory></BookmarkCategory>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
