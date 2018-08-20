// (function () {

// const btn_prev = $('#prev');
// const btn_next = $('#next');

var REV = {
    preload: function() {
        var parent = $('.slider-zone');
            origin = $('.slider-box');
        this.parent = parent;
        
        // origin
        //     .clone().prependTo(this.parent)
        //     .clone().prependTo(this.parent)
        //     .clone().appendTo(this.parent)
        //     .clone().appendTo(this.parent);

        // origin
        //     .eq(0).addClass('front')
        //     .next('.slider-box').addClass('right back')
        //     .next('.slider-box').addClass('right hide')
        //     .prev().prev().prev().addClass('left back')
        //     .prev().addClass('left hide');


        // $('.slider-box').each( function(el){
        // 	$(this).html(el + 1);
        // });
        origin
            .clone()
            .prependTo(this.parent)
            .clone()
            .appendTo(this.parent);
        origin
            .eq(0)
            .addClass('back left')
            .prevAll('.slider-box')
            .addClass('hide left');
        origin
            .eq(1)
            .addClass('front');
        origin
            .eq(2)
            .addClass('back right')
            .nextAll('.slider-box')
            .addClass('hide right');

        setTimeout(function() {
            parent.addClass('transition')
        }, 20);
    }
    ,parent: {} // JQ родительский элемент
    ,previous: function() {
        var parent = this.parent,
            left = parent.find('.back.left'),
            front = parent.find('.front'),
            right = parent.find('.back.right'),
            last = parent.find('.slider-box:last');
        left
            .removeClass('left back')
            .addClass('front')
            .prev()
            .removeClass('hide')
            .addClass('back');
        front
            .removeClass('front')
            .addClass('back right');
        right
            .removeClass('back')
            .addClass('hide');
        last
            .removeClass('right')
            .addClass('left')
            .prependTo(parent);
    }
    ,next: function() {
        var parent = this.parent,
            left = parent.find('.back.left'),
            front = parent.find('.front'),
            right = parent.find('.back.right'),
            first = parent.find('.slider-box:first');
        right
            .removeClass('back right')
            .addClass('front')
            .next()
            .removeClass('hide')
            .addClass('back');
        front
            .removeClass('front')
            .addClass('back left');
        left
            .removeClass('back')
            .addClass('hide');
        first
            .removeClass('left')
            .addClass('right')
            .appendTo(parent);
    }
}

REV.preload();


// end
// })();
// end