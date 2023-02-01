function Player(name, sport, age, country){
   this.constructor.noOfPlayers++; 
    // Private properties and functions
    // can only be viewed, edited or invoked by priviledged members
    var retirementAge = 40;
    var available = true;
    var playerAge = age ? age : 18;
    function isAvailable(){
        return available && (playerAge < retirementAge);
    }
    var playerName = name ? name : "Unknown";
    var playerSport = sport ? sport : "Unknown";
    // Priviledged methods
    // can be invoked from outside and can access private members 
    // can be replaced with public counterparts
    this.book = function(){
        if(!isAvailable()){
            this.available = false;
        }else{
            console.log("Player is unavailable");
        }
    };
    this.getSport = function(){
        return playerSport;
    }
    // public properties, modifiable from anywhere
    this.batPreference = "Lefty";
    this.hasCelebGirlfriend = false;
    this.endorses = "Super Brand";
}

// public methods - can be read or written by anyone
// can only access public and prototype properties
Player.prototype.switchHands = function(){
    this.batPreference = "righty";
};
Player.prototype.dateCeleb = function(){
    this.hasCelebGirlfriend = true;
};
Player.prototype.fixEyes = function(){
    this.wearGlasses = false;
};

// Prototype properties can be read or written by anyone(or overridden)
Player.prototype.wearGlasses = true;

// static properties - anyone can read or write
Player.noOfPlayers = 0;

(function PlayerTest(){
    // new instance of the player object created.
    var cricketer = new Player("Vivian", "Cricket", 23, "England");
    var golfer = new Player("Pete", "Golf", 32, "USA");
    console.log("So far there are " + Player.noOfPlayers + " in the guild");
    // Both these functions share the common 'Player.prototype.wearGlasses' variable
    cricketer.fixEyes();
    golfer.fixEyes();

    cricketer.endorses = "other Brand"; // public variable can be updated
    
    // both player's public method is now changed via their prototype 
    Player.switchHands = function(){
        this.batPreference = "undecided";
    };
})();

