/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.users = new Map();
    this.followers = new Map();
    this.ts = 0;
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.ts = this.ts + 1;
    if (!this.users.has(userId)) {
        this.users.set(userId, new Array());
    }
    this.users.get(userId).push([tweetId, this.ts]);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {

    let timeline = this.users.get(userId) || []; 
    let follows = this.followers.get(userId) || new Set();
    for (let follow of follows) {
        if (this.users.get(follow)) {
            timeline = timeline.concat(this.users.get(follow) || []);
        }
    }

    timeline.sort((tweetA, tweetB) => tweetB[1] - tweetA[1]);

    return timeline.slice(0, 10).map(tweet => tweet[0]);
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (!this.followers.has(followerId)) {
        this.followers.set(followerId, new Set());
    }
    this.followers.get(followerId).add(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (!this.followers.has(followerId)) {
        return;
    }
    this.followers.get(followerId).delete(followeeId);
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
