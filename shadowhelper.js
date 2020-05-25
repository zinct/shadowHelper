function shadowhelper(image, shadow = 'sm', border = false) {
    image.forEach((item) => {

        if(shadow === 'sm') {
            item.style.boxShadow = '0 0 10px rgba(0,0,0,.5)';
        } else if(shadow === 'md') {
            item.style.boxShadow = '0 0 20px rgba(0,0,0,.5)';
        } else if(shadow === 'lg') {
            item.style.boxShadow = '0 0 30px rgba(0,0,0,.5)';
        }

        if(border === true) {
            item.style.border = 'solid 10px white';
        }

    });
}

module.exports.shadowhelper = shadowhelper;