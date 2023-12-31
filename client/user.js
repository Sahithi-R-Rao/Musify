angular.module('myApp', [])
.controller('myController', function($scope, $http) {
    $scope.songs = [];

    // Function to get all songs
    function getSongs() {
        $http.get('https://sahithimusify.onrender.com/users/')
        .then(function(response) {
            console.log(response.data.users);
            $scope.songs = response.data.users;
        });
    }

    // Function to add a song
    $scope.addSong = function() {
        var data = {
            album: $scope.album,
            song: $scope.song,
            genre: $scope.genre,
            artist: $scope.artist
        };
        $http.post('https://sahithimusify.onrender.com/users/', data)
        .then(function(response) {
            getSongs();
            $scope.album = '';
            $scope.song = '';
            $scope.genre = '';
            $scope.artist = '';
        });
    };

    // Function to delete a song
    $scope.deleteSong = function(song) {
        $http.delete('https://sahithimusify.onrender.com/users/' + song._id)
        .then(function(response) {
            getSongs();
        });
    };

    // Function to update a song
    $scope.updateSong = function(song) {
        var data = {
            album: song.album,
            song: song.song,
            genre: song.genre,
            artist: song.artist
        };
        $http.patch('https://sahithimusify.onrender.com/users/' + song._id, data)
        .then(function(response) {
            getSongs();
        });
    };

    // Get all songs on page load
    getSongs();
});
