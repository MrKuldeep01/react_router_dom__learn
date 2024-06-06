import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Github() {
  const { userid } = useParams();
  console.log(userid);
  // const gitUser = useLoaderData();   /// loader 
  let user = 
  {
    "avatar_url": "https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg",
    "name": "Users name",
    "bio": "My adderess is hidden now 😎",
    "followers": .000001,
  }
  const [gitUser, setGitUser] = useState();
  useEffect(() => {
    fetch(`https://api.github.com/users/${userid}`)
      .then((res) => res.json())
      .then((res) => {
        setGitUser(res);
      })
      .catch((err) => {
        console.log(err + " <-- error in fetching userdata from github");
      });
  }, []);
  user = gitUser && !gitUser.message?gitUser:user;
  return (
    <div className="w-full py-16 block m-auto bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="max-w-52 max-h-52 overflow-hidden rounded-xl">
            <img className="object-cover object-center w-full h-full"
                            src= {user.avatar_url}
                            alt= {user.name}
                        />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-gray-900 font-bold ">
                <label className="text-black/20 text-xl p-2 m-2">Name :  </label>
            {user.name} 
            </h2>
            <h3 className=" text-gray-900 font-bold">
                <label className="text-black/20 text-xl p-2 m-2">Followes :</label>
            {user.followers} 
            </h3>
                 
            <h5 className=" text-gray-900 font-bold ">
                <label className="text-black/20 text-xl  p-2 m-2">Bio :</label>
             {user.bio}
            </h5>             
        
        
          </div>
        </div>
      </div>
    </div>
  );
}

//  to use loader for more optimization 
// export const fetchUser =async () => {
//  let res = await fetch(`https://api.github.com/users/${userid}`)
//     return res.json();
// }