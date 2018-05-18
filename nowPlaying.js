function nowPlaying(stringArray){
    let trackName = stringArray[0]
    let artistName = stringArray[1]
    let duration = stringArray[2]
    console.log('Now Playing: ' + artistName +' - '+ trackName + ' ['+ duration + ']')
}
nowPlaying(['Number One', 'Nelly', '4:09'])