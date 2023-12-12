//*-----------------Data of video playlists
let videoPlaylist={
    title:'Education Videos',
    videos:[{
        url:'./video/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4',
        decription: 'JavaScript - Way of the Samurai, Browser, first program, foreign language learning simulator',
        author: 'It-Kamasutra',
        dateOfRelise: 'Live Stream',
        isStream: true,
        coverImg:'./img/cover/Rectangle 108.png'
    },
    {
        url:'./video/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4',
        decription: 'JavaScript - The Way of the Samurai, installing VS code, code editor',
        author: 'It-Kamasutra',
        dateOfRelise: '1 week ago',
        isStream: false,
        coverImg:'./img/cover/Rectangle 108-1.png'
    },
    {
        url:'./video/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4',
        decription: 'Reboot - express + typescript + nodemon / Back-end - The Samurai Way',
        author: 'It-Kamasutra',
        dateOfRelise: '2 week ago',
        isStream: false,
        coverImg:'./img/cover/Rectangle 108-2.png'
    }
    ]
}
let videoPlaylist2={
    title:'Online training sports',
    videos:[{
        url:'./video/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4',
        decription: '20 MIN FULL BODY WORKOUT - Beginner Version // No Equipment I Pamela Reif',
        author: 'Pamela Reif',
        dateOfRelise: '12 hours ago',
        isStream: false,
        coverImg:'./img/cover/Rectangle 108-3.png'
    },
    {
        url:'./video/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4',
        decription: 'Sports training online — filming and editing - Stretching Yoga',
        author: 'Seva Prihodko',
        date: '1 week ago',
        isStream: false,
        coverImg:'./img/cover/Rectangle 108-4.png'
    },
    {
        url:'./video/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4',
        decription: 'PERFECT 20 MIN FULL BODY WORKOUT FOR BEGINNERS (No Equipment)',
        author: 'BullyJuice',
        date: '2 week ago',
        isStream: false,
        coverImg:'./img/cover/Rectangle 108-5.png'
    }
    ]
}

//*-----------------Render of playlists
// renderPlaylist()
renderVideoItemsContainer(videoPlaylist)
renderVideoItemsContainer(videoPlaylist2)

//*-----------------Functions for render
function renderVideoItemPlayer(videoPlaylistItemForRender){
    let videoPlayerContainer = document.createElement('div');
    videoPlayerContainer.classList.add('videoplayer_container');

    let videoPlayer = document.createElement('video');
    videoPlayer.src = videoPlaylistItemForRender.url;
    videoPlayer.poster = videoPlaylistItemForRender.coverImg;
    videoPlayer.controls = true;
    console.log(videoPlayer);
    videoPlayerContainer.append(videoPlayer);

    return videoPlayerContainer;
}
function renderVideoItemTitle(videoPlaylistItemForRender) {
    let videoTitleContainer = document.createElement('div');
    videoTitleContainer.classList.add('video_title_container');

    let videoTitle = document.createElement('p');
    let videoAuthor = document.createElement('p');
    let relise = document.createElement('p');
    videoTitle.classList.add('video_title');
    videoAuthor.classList.add('video_author');
    relise.classList.add('relise');

    videoTitle.innerHTML = videoPlaylistItemForRender.decription
    videoAuthor.innerHTML = videoPlaylistItemForRender.author
    relise.innerHTML = videoPlaylistItemForRender.isStream === true ? `<span class = 'stream'>Live Stream</span>`: videoPlaylistItemForRender.dateOfRelise

    videoTitleContainer.append(videoTitle, videoAuthor, relise);
     return videoTitleContainer;
}
function renderVideoItemsContainer(videoPlaylist) {
    let videoplaylistWrap = document.createElement('div');
    videoplaylistWrap.classList.add('videoplaylist_wrap');
    document.querySelector('#wrap').append(videoplaylistWrap);
    
    let playlistTitle = document.createElement('div');
    playlistTitle.innerHTML = `<h2>${videoPlaylist.title}</h2>`;
    videoplaylistWrap.append(playlistTitle);

    let videoItemsContainer =document.createElement('div');
    videoItemsContainer.classList.add('video_items_container');
    videoplaylistWrap.append(videoItemsContainer);

    for (let i = 0; i < videoPlaylist.videos.length; i++) {
        let videoItemContainer = document.createElement('div');
        videoItemContainer.classList.add('video_item_container');
        videoItemsContainer.append(videoItemContainer);    

        videoItemContainer.append(renderVideoItemPlayer(videoPlaylist.videos[i]));
        videoItemContainer.append(renderVideoItemTitle(videoPlaylist.videos[i]));
    }
    
}