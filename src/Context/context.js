import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const FaContext = React.createContext();

//firebase
const firebaseConfig = {
  apiKey: "AIzaSyCtJ4woTj54xE7n42UTpvp37dB4kJxZ7-k",
  authDomain: "fa-back-60b5e.firebaseapp.com",
  databaseURL: "https://fa-back-60b5e.firebaseio.com",
  projectId: "fa-back-60b5e",
  storageBucket: "fa-back-60b5e.appspot.com",
  messagingSenderId: "906968748176",
  appId: "1:906968748176:web:062b6dfb7c79f215cb4815",
  measurementId: "G-9GG577ZD7D",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let db = firebase.firestore();

class FaProvider extends Component {
  state = {
    load: false,
    login: false,
    loadHome: false,
    valuePost: "",
    showDisplay: false,
    dataFirebase: [],
    idd: uuidv4(),
    UserData: [],
    informationUsers: [],
    Settingname: false,
    Settingnewemail: false,
    SettingNewPhone: false,
    mess: "",
    ChangeSignIn: false,
    inputSearchAcc: "",
    UserInfo: [], // in Seacrh
    followBtn: false,
    SearchUsers: [],
    inpComment: "",
    AlonePost: [], // Comments
    AlonePostProfile: [], // Comments
    hh: false,
  };
  componentDidMount() {
    this.setState({
      UserData: this.getDate(),
      login: this.getLogin(),
    });
    db.collection("Users")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.renderUsers(doc);
        });
      });

    db.collection("Posts")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.renderPost(doc);
        });
      });
  }
  //renderPost
  renderUsers = (User) => {
    let dataBa = [...this.state.informationUsers];
    let id = User.id;
    let dataItem = {
      ...User.data(),
      id,
    };
    dataBa = [...dataBa, dataItem];

    this.setState(() => {
      return {
        informationUsers: dataBa,
      };
    });
  };
  //renderPost
  renderPost = (post) => {
    let dataBa = [...this.state.dataFirebase];

    let id = post.id;
    let dataItem = {
      ...post.data(),
      id,
      likepost: false,
    };
    dataBa = [...dataBa, dataItem];
    this.setState(() => {
      return {
        dataFirebase: dataBa,
      };
    });
  };

  //StoragePosts
  StoragePosts = () => {
    return JSON.parse(localStorage.getItem("Posts")) || [];
  };
  //getStorageCart
  getDate = () => {
    let User;
    if (localStorage.getItem("User")) {
      User = JSON.parse(localStorage.getItem("User"));
    } else {
      User = [];
    }
    return User;
  };
  // getLogin
  getLogin = () => {
    let Login;
    if (localStorage.getItem("Login")) {
      Login = JSON.parse(localStorage.getItem("Login"));
    } else {
      Login = false;
    }
    return Login;
  };

  //GetStarted
  GetStarted = () => {
    this.setState({
      load: true,
    });
  };
  //Synch
  Synch = () => {
    localStorage.setItem("User", JSON.stringify(this.state.UserData));
    localStorage.setItem("Login", JSON.stringify(this.state.login));
  };

  onChangeValue = (e) => {
    const Post = document.getElementById("Post").value;
    this.setState({
      valuePost: Post,
    });
  };

  handelChange = () => {
    const imgSet = document.querySelector("#image_uploads").files[0];
    const ImgSrc = document.getElementById("Src");
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        ImgSrc.src = reader.result;
      },
      false
    );
    if (imgSet) {
      reader.readAsDataURL(imgSet);
    }
  };

  //ChangeSignIn
  ChangeSignOrSignUp = (e) => {
    e.preventDefault();
    this.setState({
      ChangeSignIn: true,
    });
  };
  //savePhoto
  SignInUser = (e) => {
    e.preventDefault();
    const ImgSrc = document.getElementById("Src"); // Img Src in Component SignIn
    let email = document.getElementById("Email").value; // input Email Value in SignIn
    let password = document.getElementById("Password").value; // input password Value in SignIn
    let phone = document.getElementById("Phone").value; // input phone Value in SignIn
    let firstName = document.getElementById("firstName").value; // input name Value in SignIn
    let lastName = document.getElementById("lastName").value; // input name Value in SignIn

    const db = firebase.firestore();
    const auth = firebase.auth();
    if (
      email !== "" &&
      password !== "" &&
      phone !== "" &&
      lastName !== "" &&
      firstName !== ""
    ) {
      let data = {
        imgSrcUser: ImgSrc.src,
        emailUser: email,
        Userfirstname: firstName,
        UserlastName: lastName,
        fullname: firstName + " " + lastName,
        phoneUser: phone,
        load: true,
        follow: false,
        Followers: [],
        Liked: [],
        Posts: [],
      };
      db.collection("Users").add(data);
      const promise = auth.createUserWithEmailAndPassword(email, password);
      promise.then((user) => {
        window.location.reload();
        window.location.pathname = "/";
      });
      promise.catch((e) => {
        alert(e.message);
      });
    } else {
      console.log("Input is Empty");
    }
  };
  //Login
  Login = (e) => {
    e.preventDefault();
    let email = document.getElementById("Sign-In-Email").value;
    let password = document.getElementById("Sign-In-Password").value;
    const auth = firebase.auth();
    const dataUsers = this.state.informationUsers;

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.then((users) => {
      const User = dataUsers.find((item) => item.emailUser === email);
      this.setState(
        {
          UserData: User,
          login: true,
        },
        () => {
          // window.location.reload();
          this.Synch();
        }
      );
    });
    promise.catch((e) => {
      this.setState({
        mess: e.message,
      });
    });
  };
  //LoginOut
  LoginOut = () => {
    localStorage.removeItem("User");
    this.setState(
      {
        UserData: [],
        login: false,
      },
      () => {
        window.location.reload();
        this.Synch();
      }
    );
  };

  //PublisherPost
  PublisherPost = () => {
    const Post = document.getElementById("Post").value;
    const NameHome = document.querySelector(".profile-name");
    const Imgnav = document.getElementById("nav-img-personal").src;
    const meInfo = this.state.UserData;
    const mePosts = meInfo.Posts;
    const post = {
      name: NameHome.textContent,
      email: meInfo.emailUser,
      post: Post,
      imgSrc: Imgnav,
      like: false,
      comments: [],
      all: [],
      created: +new Date(),
    };
    mePosts.push(post);
    this.state.dataFirebase.push(post);

    db.collection("Posts").add(post);
    db.collection("Users")
      .doc(meInfo.id)
      .update({
        Posts: mePosts,
      })
      .then((use) => {
        this.setState(
          {
            UserData: meInfo,
          },
          () => {
            this.Synch();
          }
        );
      });
    document.getElementById("Post").value = "";
    this.setState({
      valuePost: "",
    });
  };

  //DeleteAcount
  DeleteAcount = (id) => {
    db.collection("Users")
      .doc(id)
      .delete()
      .then((use) => {
        this.setState(
          {
            UserData: [],
          },
          () => {
            this.Synch();
            window.location.pathname = "/";
          }
        );
      });
  };
  //DeletePost
  DeletePost = (postuser) => {
    let Users = [...this.state.informationUsers];
    let dataPosts = [...this.state.dataFirebase];
    let dbInfo = this.state.UserData;
    let myAcc = Users.filter((acc) => acc.emailUser === postuser.email);

    let AllPosts = dataPosts.filter((post) => post.email === postuser.email);
    AllPosts.forEach((po) => {
      let Acc = dataPosts.filter((post) => post.post === postuser.post);
      Acc.forEach((acc) => {
        db.collection("Posts").doc(acc.id).delete();
      });
    });

    myAcc.forEach((item) => {
      let postFilter = dbInfo.Posts.filter(
        (post) => post.post !== postuser.post
      );
      dbInfo.Posts = postFilter;
      db.collection("Users")
        .doc(dbInfo.id)
        .update({
          Posts: dbInfo.Posts,
        })
        .then((use) => {
          this.setState(
            {
              UserData: dbInfo,
            },
            () => {
              // this.Synch();
            }
          );
        })
        .then((user) => {
          // window.location.reload();
        });
    });
  };

  // =============== Setting Email and Name and Phone
  LikePost = (user) => {
    let Me = this.state.UserData;
    let dataBa = [...this.state.dataFirebase];
    let Filtered = dataBa.find((item) => item.id === user.id);
    Me.Liked.push(Filtered);
    if (Me.Liked.includes(Filtered)) {
      document.getElementById(user.id).style.color = "#dc3545";
      document.getElementById(user.id).classList.add("lala");
    }
  };

  //DropDownNavbar
  showDropDown = () => {
    this.setState({
      showDisplay: !this.state.showDisplay,
    });
  };
  returnSignin = () => {
    this.setState({
      ChangeSignIn: false,
    });
  };

  // Search Account
  handelChangeSearchAcc = (e) => {
    e.preventDefault();
    this.setState({
      inputSearchAcc: e.target.value,
    });
  };
  handelSubmitSearchAcc = (e) => {
    e.preventDefault();
    let Users = this.state.informationUsers;
    let InfoUsersMe = this.state.UserData;
    let filters = Users.filter(
      (item) => item.fullname === this.state.inputSearchAcc
    );
    let FiltersFinish = filters.filter((item) => item.id !== InfoUsersMe.id);
    this.setState({
      SearchUsers: FiltersFinish,
      inputSearchAcc: "",
    });
  };
  addUsertoInfo = (id) => {
    this.setState({
      UserInfo: id,
    });
  };
  addUsertoFollower = (user) => {
    let meInfo = this.state.UserData;
    let meFollow = meInfo.Followers;
    if (meInfo.Followers.includes(user)) {
      console.log("true");
    } else {
      meFollow.push(user);
      document.getElementById("follow-btn-id").textContent = "Following";
      db.collection("Users").doc(meInfo.id).update({
        Followers: meFollow,
      });
      db.collection("Users").doc(user.id).update({
        follow: true,
      });
      this.setState(
        {
          UserData: meInfo,
        },
        () => {
          this.Synch();
        }
      );
    }
  };
  removeUsertoFollower = (user) => {
    let meInfo = this.state.UserData;
    let meFollow = meInfo.Followers;
    let followFiltered = meFollow.filter((item) => item.id !== user.id);
    meFollow = followFiltered;
    meInfo.Followers = meFollow;
    db.collection("Users").doc(meInfo.id).update({
      Followers: meFollow,
    });
    db.collection("Users").doc(user.id).update({
      follow: false,
    });
    this.setState(
      {
        UserData: meInfo,
      },
      () => {
        this.Synch();
      }
    );
  };
  addComment = (Post) => {
    let dataBa = this.state.dataFirebase;
    let postUser = dataBa.find((item) => item.email === Post.email);
    this.setState({
      AlonePost: postUser,
      AlonePostProfile: Post,
    });
  };
  WriteComment = (e) => {
    e.preventDefault();
    this.setState({
      inpComment: e.target.value,
    });
  };
  addCommentDiv = (e) => {
    e.preventDefault();
    const Info = this.state.AlonePost;
    let UserDataLocal = this.state.UserData;
    let theComment = {
      comment: this.state.inpComment,
      from: UserDataLocal.fullname,
      idPost: Info.id,
      emailPost: Info.email,
      fromImg: UserDataLocal.imgSrcUser,
    };
    Info.comments.push(theComment);
    console.log(Info.id);
    db.collection("Posts").doc(Info.id).update({
      comments: Info.comments,
    });
    this.setState({
      inpComment: "",
    });
  };
  SeeMore = (user) => {
    this.setState({
      AlonePost: user,
    });
  };

  SharePost = (acc) => {
    console.log(acc);
    let comfir = window.confirm("Share Now A diary");
    if (comfir === true) {
      let meInfo = this.state.UserData;
      let meId = meInfo.id;
      let mePosts = meInfo.Posts;
      let he = {
        ...acc,
        share: "Share",
      };
      mePosts.push(he);
      db.collection("Users")
        .doc(meId)
        .update({
          Posts: mePosts,
        })
        .then((use) => {
          this.setState(
            {
              UserData: meInfo,
            },
            () => {
              this.Synch();
            }
          );
        });
    } else {
      // alert("Can't Share Post , Try Again")
    }
  };
  render() {
    return (
      <FaContext.Provider
        value={{
          ...this.state,
          showDropDown: this.showDropDown,
          handelChange: this.handelChange,
          SignInUser: this.SignInUser,
          onChangeValue: this.onChangeValue,
          PublisherPost: this.PublisherPost,
          Login: this.Login,
          GetStarted: this.GetStarted,
          LoginOut: this.LoginOut,
          LikePost: this.LikePost,
          ChangeSignOrSignUp: this.ChangeSignOrSignUp,
          returnSignin: this.returnSignin,
          DeleteAcount: this.DeleteAcount,
          DeletePost: this.DeletePost,
          handelChangeSearchAcc: this.handelChangeSearchAcc,
          handelSubmitSearchAcc: this.handelSubmitSearchAcc,
          addUsertoInfo: this.addUsertoInfo,
          addUsertoFollower: this.addUsertoFollower,
          removeUsertoFollower: this.removeUsertoFollower,
          addComment: this.addComment,
          SeeMore: this.SeeMore,
          WriteComment: this.WriteComment,
          addCommentDiv: this.addCommentDiv,
          SharePost: this.SharePost,
        }}
      >
        {this.props.children}
      </FaContext.Provider>
    );
  }
}

const FaConsumer = FaContext.Consumer;

export { FaConsumer, FaProvider };
