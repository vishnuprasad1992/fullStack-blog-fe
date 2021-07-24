import './App.css';
import { Switch, Route } from 'react-router-dom'
// import Navbar from './components/navbar/Navbar'
import Home from './components/pages/home/Home';
// import Footer from './components/footer/Footer';
import BlogAdminRegisteration from './components/blog-admin/blog-admin-registeration/BlogAdminRegisteration';
import BlogAdminLogin from './components/blog-admin/blog-admin-login/BlogAdminLogin';
import Catergory from './components/blog-admin/blog-admin-category/Catergory';
import BlogHome from './components/blog-admin/blog-admin-home/BlogHome';
import Posts from './components/blog-admin/blog-admin-posts/Posts';
import CreatePost from './components/blog-admin/blog-admin-posts/CreatePost';
import Users from './components/blog-admin/users/Users';
import Category from './components/pages/category/Category';
import Single from './components/pages/single/Single';
import EditPost from './components/blog-admin/blog-admin-posts/EditPost';


function App() {

	const user = JSON.parse(localStorage.getItem("logged-user")) ;

	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/category/:category">
					<Category />
				</Route>
				<Route path="/posts/:slug">
					<Single />
				</Route>
				<Route path="/blog-admin-registeration">
					<BlogAdminRegisteration />
				</Route>
				<Route path="/blog-admin-login">
					<BlogAdminLogin />
				</Route>
				
				{user &&
					<Switch>
						<Route exact path="/blog-admin/users">
                   			 <Users />
                		</Route>
						<Route exact path="/blog-admin/posts">
							<Posts />
						</Route>
						<Route exact path="/blog-admin">
							<BlogHome />
						</Route>
						<Route exact path="/blog-admin/category">
							<Catergory />
						</Route>
							{/* <Route exact path="/blog-admin/category/:id">
								<UpdateCatergory />
							</Route> */}
							{/* <Route exact path="/blog-admin/user/:id">
								<UpdateCatergory />
							</Route> */}
						<Route exact path="/blog-admin/create-post">
							<CreatePost />
						</Route>

						<Route exact path="/blog-admin/posts/:id">
							<EditPost />
						</Route>
					</Switch>
				}
			</Switch>
		</div>
	);
}

export default App;
