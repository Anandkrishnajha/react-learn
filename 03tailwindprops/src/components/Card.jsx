import React from "react";

function Card({username="AKJ",post="Not Assigned", myArr,myObj}) {
    // console.log(props);
    
    return (
        <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img
                    className="w-24 h-24 rounded-full mx-auto"
                    src="https://picsum.photos/536/354"
                    alt=""
                    width="384"
                    height="512"
                ></img>
                <div className="pt-6 space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            {/* {myArr} */}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, id?
                        </p>
                    </blockquote>
                    <figcaption className="f">
                        <div>{username}</div>
                        <div>{post}</div>
                        {/* {myObj&&(
                            <div>
                                <p>Name: {myObj.name}</p>
                                <p>Age: {myObj.age}</p>
                                <p>City: {myObj.city}</p>
                                <p>State: {myObj.state}</p>
                                <p>Country:{myObj.country}</p>
                            </div>
                        )} */}
                    </figcaption>
                </div>
            </figure>
        </div>
    );
}

export default Card;
