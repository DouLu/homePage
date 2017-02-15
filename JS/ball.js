/**
 * Created by Administrator on 2016/5/13.
 */
;(function($){
//定义变量（动画元素、事件变量）
    var container=$(".container");
    var ballbox=$(".ball-box");
    var contentbox=$(".content-box");
    var open=$(".ball");
//自定义动画
    $.Velocity.RegisterUI('ball-in',{
        defaultDuration:500,
        calls:[
            [{opacity:[1,0] }]
            //opacity透明度从0到1，左边是动画结束时的状态，右边是动画开始时的状态
        ]
    });
    $.Velocity.RegisterUI('ball-out',{
        defaultDuration:300,
        calls:[
            [{opacity:[0,1] }]
            //opacity透明度从1到0，左边是动画结束时的状态，右边是动画开始时的状态
        ]
    });
    //动画序列
    var seqInit=[
        {elements:container,
            properties:'ball-in',
            options:{
                sequenceQueue:false//同时执行动画效果
            }
        }, {elements:ballbox,
            properties:'ball-in',
            options:{
                sequenceQueue:false//同时执行动画效果
            }
        }
    ];
    var seqClick=[
        {
            elements: container,
            properties: 'ball-in',
            options: {
                sequenceQueue: false//同时执行动画效果
            }
        }, {elements:ballbox,
            properties:'ball-out',
            options:{
                sequenceQueue:false//同时执行动画效果
            }
        },{
            elements:contentbox,
            properties:'ball-in',
            options:{sequenceQueue:false}
        }
    ];
    //事件绑定
    $.Velocity.RunSequence(seqInit);
    open.on('click',function(){
        $.Velocity.RunSequence(seqClick);
    });
})(jQuery);