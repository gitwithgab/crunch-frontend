import React from 'react'

const AdminForm = () => {
    return (
        <>
          <form id="adminForm" method="POST" action="/" encType="multipart/form-data">

                 <div className="form-controller">
                        <label for="category">Select Category</label>
                        <select name="category" id="category" size="1">
                            <option value="tvShow">TV Show</option>
                            <option value="movie">Movie</option>
                        </select>
                </div>

                <div className="form-controller">
                        <label for="title">Title</label>
                        <input type="text" name="title" id="title"></input>
                </div>

                <div className="form-controller">
                        <label for="synopsis">Synopsis</label>
                        <textarea name="synopsis" id="synopsis"></textarea>
                </div>

                <div className="form-controller">
                        <label for="genre">Select Genre</label>
                        <select name="genre" id="genre" size="1">
                            <option value="action">Action</option>
                            <option value="animation">Animation</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="documentary">Documentary</option>
                            <option value="drama">Drama</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="horror">Horror</option>
                            <option value="musical">Musical</option>
                            <option value="romance">Romance</option>
                            <option value="scifi">Sci-Fi</option>
                            <option value="thriller">Thriller</option>
                        </select>
                </div>

                <div className="form-controller">
                        <label for="rentalPrice">Rental Price</label>
                        <input type="text" name="rentalPrice" id="rentalPrice"></input>
                </div>

                <div className="form-controller">
                        <label for="purchasePrice">Purchase Price</label>
                        <input type="text" name="purchasePrice" id="purchasePrice"></input>
                </div>

                <div className="form-controller">
                        <p>Is this a featured show?</p>
                        <input type="radio" name="featured" id="featured" value="featured"></input>
                        <label for="rb-yes">Yes</label>
                        <input type="radio" name="not-featured" id="not-featured" value="not-featured"></input>
                        <label for="rb-no">No</label>
                </div>

                <div className="form-controller">
                        <label for="bannerImg">Upload Banner Image</label>
                        <input type="file" name="bannerImg" id="bannerImg"></input>
                </div>

                <button id="addShowButton" type="submit" value="submit">SUBMIT</button>
          
          </form>  
        </>
    )
}

export default AdminForm
