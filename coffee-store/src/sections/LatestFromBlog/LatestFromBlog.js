import React from 'react';
import '../../sass/sections/LatestFromBlog.scss';
import LatestFromBlogComp from '../../components/LatestFromBlogComp/LatestFromBlogComp';
import TitleSections from '../../components/TitleSections/Titlesection';
import CoupleImg from '../../img/img/couple.jpg';
import Book from '../../img/img/coffee-and-book.jpg';
import MoreCoffee from '../../img/img/more-coffee.jpeg'

const title={
    sectionTitle: 'LATEST FROM BLOG',
    sectionSubtitle:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and  will uncover many web sites still in their infancy.',
    sectionBottom:'BROWSE MENU',
};

const blogCard=[
    {
        image:Book,
        title:'THE GREAT OUTDOORS',
        date:'Sep 27, 2017',
        article:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their  kknjknfdjks ndlnlsnlkdcn kndvlknflk lndlndflsnclvf lnkf nfldvn default model text, and  will uncover many web sites still in their infancy. no se si se puede escribir mas y ya estoy podrida ',
    },
    {
        image:CoupleImg,
        title:'SHARED MEMORIES',
        date:'Sep 27, 2017',
        article:'Many desktop publishing entrada de blog de ejemplo para poder practicar un poco packages and web page editors now use Lorem Ipsum as their default model text, and  will uncover many web sites still in their infancy. no se si se puede escribir mas y ya estoy podrida ',
    },
    {
        image:MoreCoffee,
        title:'THE LOOK OUT',
        date:'Sep 27, 2017',
        article:'Many desktop  hkjlk  kdkddoo okjkjfkljf kfjkjjfd kdjkflnklnkl jfkjdlkdfpublishing packages and web page editors now use Lorem Ipsum as their default model text, and  will uncover many web sites still in their infancy. no se si se puede escribir mas y ya estoy podrida ',
    }
]

const LatestFromBlog =()=>{
    return(
        <div>
        <div className='section-container'>
          <TitleSections className='text-black'
                sectionTitle={title.sectionTitle}
                sectionSubtitle={title.sectionSubtitle}
                sectionBottom={title.sectionBottom}>
                    <div className='container'>
                    {
                    blogCard.map(item=>{
                        return(
                            <LatestFromBlogComp 
                                image={item.image}
                                title={item.title}
                                date={item.date}
                                article={item.article}
                            />
                            )
                        })
                    }
                 </div>   
                </TitleSections>
        </div>
        </div>
    )
}

export default LatestFromBlog;