import logo from "./logo.svg";
import "./App.css";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBookMark, changeCategory, changeTextArea, changeTitle, isAddChange } from "./store/userSlice";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <MainSection></MainSection>
    </div>
  );
}

function NavBar() {
  return (
    <div className="navbar-section">
      <Nav activeKey="/">
        <Nav.Item>
          <Nav.Link eventKey="/">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

function SideBar() {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);
  let options = state.bookMark;
  return (
    <div className="side-bar">
      <div className="container">
        <h5 className="side-bar-title">북마크 추가하기</h5>
        <select
          onChange={(e) => {
            console.log(e.target.value);
            if (e.target.value === "") {
              dispatch(isAddChange(true));
            } else {
              dispatch(isAddChange(false));
            }
          }}
        >
          <option value="">카테고리를 추가하세요.</option>
          {options.map((a, i) => {
            return (
              <option key={i} value={a.category}>
                {a.category}
              </option>
            );
          })}
        </select>
        {state.isAdd ? (
          <input
            placeholder="Category"
            onChange={(e) => {
              dispatch(changeCategory(e.target.value));
            }}
          ></input>
        ) : null}
        <input
          placeholder="Title"
          onChange={(e) => {
            dispatch(changeTitle(e.target.value));
          }}
        ></input>
        <textarea
          rows="5"
          placeholder="url"
          onChange={(e) => {
            dispatch(changeTextArea(e.target.value));
          }}
        ></textarea>
        <button
          onClick={() => {
            dispatch(addBookMark({ category: state.category, list: [{ title: state.title, url: state.textArea }] }));
          }}
        >
          추가
        </button>
      </div>
    </div>
  );
}

function MainSection() {
  return (
    <div className="main-section">
      <SideBar></SideBar>
      <MainContent></MainContent>
    </div>
  );
}

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

function BookmarkCategory() {
  let state = useSelector((state) => state);
  let bookmark = state.bookMark;
  return (
    <>
      {bookmark.map((a, i) => {
        return (
          <div className="col-lg-3" key={i}>
            <div className="bookmark-item">
              <p>{a.category}</p>
              <div>
                <ul>
                  {a.list.map((a, i) => {
                    return (
                      <li key={i}>
                        <a href={a.url}>{a.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
