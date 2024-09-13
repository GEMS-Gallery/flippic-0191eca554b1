import Func "mo:base/Func";
import Text "mo:base/Text";

import Blob "mo:base/Blob";
import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Nat8 "mo:base/Nat8";
import Random "mo:base/Random";

actor CoinFlipper {
  // Stable variables to store the images
  stable var headsImage : ?Blob = null;
  stable var tailsImage : ?Blob = null;

  // Function to upload the heads image
  public func uploadHeadsImage(image : Blob) : async () {
    headsImage := ?image;
  };

  // Function to upload the tails image
  public func uploadTailsImage(image : Blob) : async () {
    tailsImage := ?image;
  };

  // Function to get the heads image
  public query func getHeadsImage() : async ?Blob {
    headsImage
  };

  // Function to get the tails image
  public query func getTailsImage() : async ?Blob {
    tailsImage
  };

  // Function to flip the coin
  public func flipCoin() : async Text {
    let randomBytes = await Random.blob();
    let randomNumber = Nat8.toNat(Blob.toArray(randomBytes)[0]);
    if (randomNumber % 2 == 0) {
      "heads"
    } else {
      "tails"
    }
  };
}