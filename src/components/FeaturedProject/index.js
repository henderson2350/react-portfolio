import React from 'react'
import './style.css'

const name = "Cookbook"

function FeaturedProject() {
    return (
        <div>
            <a href="https://joshwrightdev.github.io/Project-1/" target="_blank">
                <img
                  class="img-fluid"
                  id="large-photo"
                  src="./photos/porfolio photo.JPG"
                />
                <p id="large-caption">{name}</p>
              </a>
        </div>
    )
}

export default FeaturedProject