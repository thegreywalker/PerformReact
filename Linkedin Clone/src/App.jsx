import "./App.css";
import Feed from "./Components/Feed/Feed";
import Header from "./Components/Header/Header";
import NewsBar from "./Components/NewsBar/NewsBar";
import AllPosts from "./Components/Posts/AllPosts";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
    return (
        <>
            <Header />
            <div className="content">
                <Sidebar />
                <div className="nested-content">
                    <Feed />
                    <AllPosts />
                </div>
                <NewsBar className="newsBar" />
            </div>
        </>
    );
}

// Todo: Search Page, Message Page(Blank), Notifications Page(Blank), Profile Page(Full)
// Todo: Responsive for large screen

export default App;
