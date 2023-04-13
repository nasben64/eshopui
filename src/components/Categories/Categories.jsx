import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            // src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Pizza
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            // src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            src="https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2FsYWR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Side Dishes
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            // src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            src="https://plus.unsplash.com/premium_photo-1677000666761-ff476a65c8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGFzdGF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Pasta
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                // src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Burger
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                // src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                src="https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0ZWFrfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            // src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            src="https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2tlbiUyMGtlYmFifGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Kebab
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
