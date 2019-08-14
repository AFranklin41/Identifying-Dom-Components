// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// Obtain a reference the element with a class of dashed and remove it.
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

const articleHeader = document.querySelector(".article__header")
articleHeader.textContent = "Welcome the the Alex blog!"

const articleHeaderAll = document.querySelectorAll(".article__header")
    for(i=0; i < articleHeaderAll.length; i++){
        articleHeaderAll[i].classList.add("important")
    }

const removeDashed = document.querySelector(".dashed")
removeDashed.classList.remove("dashed")

const articleFooterGoldenrod = document.querySelector(".article__footer")
articleFooterGoldenrod.classList.add("goldenrod")