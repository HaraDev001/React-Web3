import React from 'react';
import { Link } from 'react-router-dom';

export default function reset() {
  return (
    <>
      <div className="vh-100 d-flex justify-content-center">
        <div className="form-access my-auto">
          <form>
            <span>Reset password</span>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email Address"
            />
            <button type="submit" className="btn btn-primary">
              Reset
            </button>
            <h2>
              Remember Password?
              <Link to="/login"> Sign in here</Link>
            </h2>
          </form>
        </div>
      </div>
    </>
  );
}
