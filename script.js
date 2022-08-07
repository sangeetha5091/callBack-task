const div = document.createElement("div");
const h1 = document.createElement("h1");
h1.classList.add("time-text");
const h1_Content = document.createElement("h1");
h1_Content.classList.add("main-text");

// Call Back Hell
setTimeout(() => {
  h1.innerText = `00:10`;
  setTimeout(() => {
    h1.innerText = `00:09`;
    setTimeout(() => {
      h1.innerText = `00:08`;
      setTimeout(() => {
        h1.innerText = `00:07`;
        setTimeout(() => {
          h1.innerText = `00:06`;
          setTimeout(() => {
            h1.innerText = `00:05`;
            setTimeout(() => {
              h1.innerText = `00:04`;
              setTimeout(() => {
                h1.innerText = `00:03`;
                setTimeout(() => {
                  h1.innerText = `00:02`;
                  setTimeout(() => {
                    h1.innerText = `00:01`;
                    setTimeout(() => {
                      h1.innerText = `00:00`;
                      setTimeout(() => {
                        h1.style.display = "none";
                        h1_Content.innerText = `Happy Developers Day`;
                        const img = document.createElement("img");
                        img.setAttribute("src", "image1.png");
                        document.body.append(h1_Content, img);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 0);

div.append(h1);

document.body.append(div);
