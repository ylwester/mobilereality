import Button from './Button';
import React from 'react';

const Offer = () => {

    return (
        <div className="offer-wrapper">
            <h1 className="header-text">
                Nasza oferta
            </h1>
            <h3 className="subheader-text">
                Dowiedz się co możemy tobie zaoferować
            </h3>
            <div className="description-text">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec tincidunt dui, eget tempus odio. Pellentesque velit ante, congue ut nisi sit amet, fermentum tempor mauris. Sed eu tellus tristique, tincidunt magna placerat, finibus ipsum. Donec pharetra volutpat tortor, eu condimentum enim imperdiet ac. Ut eget arcu viverra, congue odio ac, ultrices magna. Vivamus fermentum enim vitae lobortis ultricies. Ut congue ex non justo suscipit, vel vulputate quam interdum.
                </p>
                <p>
                    Proin porttitor ligula velit, et maximus tortor luctus eu. Morbi eu venenatis odio, eget euismod nulla. Aliquam cursus dui non leo pulvinar auctor. Phasellus efficitur sodales leo nec facilisis. Pellentesque sit amet ante non magna posuere fermentum placerat non erat. Aenean malesuada vitae quam vel auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit orci eros, eu vestibulum augue ornare ut. Vivamus eget fringilla magna. Maecenas leo dui, pharetra ut neque a, dictum accumsan nunc.
                </p>
            </div>
            <Button classname="check-more-button" displayText={'Zobacz więcej'} redirect={'/votes'} />
        </div>
    )
}

export default Offer;