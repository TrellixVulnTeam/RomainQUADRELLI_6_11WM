// Import modules
const Sauces = require("../models/sauces.js");

// Get all sauces of sauces collection
exports.getAllSauce = (req, res, next) => {
  Sauces.find()
    .then(sauces => {
      res.status(200).json(sauces);
    })
    .catch(error => res.status(500).json({ error }));
};

// Add sauce
exports.addSauce = (req, res, next) => {
  const sauce = new Sauces({
    ...JSON.parse(req.body.sauce),
    likes: 0,
    dislikes: 0,
    usersLiked: [],
    usersDisliked: [],
    imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
  });
  sauce.save().then(sauce => {
    res.status(201).json({ message: "Sauce crée"});
  })
  .catch(error => res.status(500).json({ error }));
};

// Get one specific sauce based on id in URL
exports.getSpecificSauce = (req, res, next) => {
  Sauces.findById(req.params.id)
    .then(sauce => {
      res.status(200).json(sauce);
    })
    .catch(error => res.status(500).json({ error }));
};

// Update one specific sauce based on id in URL
exports.updateSpecificSauce = (req, res, next) => {
  // If image is uploaded
  if(req.body.sauce){
    const updatedSauce = {
      ...JSON.parse(req.body.sauce),
      imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    };
    const selector = { _id: req.params.id };
    Sauces.findOneAndUpdate( { _id: req.params.id }, { $set: updatedSauce }, { returnOriginal: false } ).then(sauce => {
      res.status(201).json({ message: "Sauce mise à jour (avec image)"});
    })
    .catch(error => res.status(500).json({ message: error }));
  }
  // If no image is supplied
  else{
    const selector = { _id: req.params.id };
    Sauces.findOneAndUpdate( { _id: req.params.id }, { $set: req.body }, { returnOriginal: false } ).then(sauce => {
      res.status(201).json({ message: "Sauce mise à jour (sans image)"});
    })
    .catch(error => res.status(500).json({ message: error }));
  }
};

// Like / Dislike one specific sauce based on id in URL
exports.likeDislikeSauce = (req, res, next) => {
  // Parse supplied params
  curUserId = req.body.userId;
  curLike = req.body.like;
  // Get current like/dislike of sauce
  Sauces.findById(req.params.id)
    .then(sauce => {
      switch(curLike){
        // If user liked, following informations depends on like value
        case 1:
          // If user already liked
          if( sauce.usersLiked.includes(curUserId) ){
            sauce.likes -= 1;
            sauce.usersLiked = sauce.usersLiked.filter(id => id != curUserId);
          }
          // If user didn't like or dislike
          if( ! sauce.usersDisliked.includes(curUserId) && ! sauce.usersLiked.includes(curUserId)){
            sauce.likes += 1;
            sauce.usersLiked.push(curUserId);
          }
          break;
        case 0:
          // If user already liked
          if( sauce.usersLiked.includes(curUserId) ){
            sauce.likes -= 1;
            sauce.usersLiked = sauce.usersLiked.filter(id => id != curUserId);
          }
          // If user already disliked
          if( sauce.usersDisliked.includes(curUserId) ){
            sauce.dislikes -= 1;
            sauce.usersDisliked = sauce.usersDisliked.filter(id => id != curUserId);
          }
          break;
        case -1:
          // If user already disliked
          if( sauce.usersDisliked.includes(curUserId) ){
            sauce.dislikes -= 1;
            sauce.usersDisliked = sauce.usersDisliked.filter(id => id != curUserId);
          }
          // If user didn't like or dislike
          if( ! sauce.usersDisliked.includes(curUserId) && ! sauce.usersLiked.includes(curUserId)){
            sauce.dislikes += 1;
            sauce.usersDisliked.push(curUserId);
          }
          break;
      }
      // Update current sauce with new parameters
      Sauces.findOneAndUpdate( { _id: req.params.id }, { $set: sauce }, { returnOriginal: false } ).then(sauce => {
        res.status(201).json({ message: "Sauce mise à jour."});
      })
      .catch(error => res.status(500).json({ message: error }));
    })
    .catch(error => res.status(500).json({ error }));
};

// Delete one specific sauce based on id in URL
exports.deleteSpecificSauce = (req, res, next) => {
  Sauces.deleteOne( { _id: req.params.id } )
    .then(sauce => {
      res.status(200).json(sauce);
    })
    .catch(error => res.status(500).json({ error }));
};
