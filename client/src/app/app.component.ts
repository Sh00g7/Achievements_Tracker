import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AppService } from './app.service';
import { KeyValue } from '@angular/common';
import { Target } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private http: HttpClient, private appService: AppService) {}

  achievements: any = {
    "PURIFY_ENTIRE_WORLD": {"name": "And Good Riddance!", "completed": false, "category": "other", "icon": "assets/images/Achievement_And_Good_Riddance.webp"},
    "GET_ANKH_SHIELD": {"name": "Ankhumulation Complete", "completed": false, "category": "item", "icon": "assets/images/Achievement_Ankhumulation_Complete.webp"},
    "DEFEAT_DEERCLOPS": {"name": "Eye For An Eye", "completed": false, "category": "boss", "icon": "assets/images/Achievement_An_Eye_For_An_Eye.webp"},
    "ARCHAEOLOGIST": {"name": "Archaeologist", "completed": false, "category": "enemy", "icon": "assets/images/Achievement_Archaeologist.webp"},
    "PLAY_ON_A_SPECIAL_SEED": {"name": "Rare Realm", "completed": false, "category": "other", "icon": "assets/images/Achievement_A_Rare_Realm.webp"},
    "FLY_A_KITE_ON_A_WINDY_DAY": {"name": "Rather Blustery Day", "completed": false, "category": "other", "icon": "assets/images/Achievement_A_Rather_Blustery_Day.webp"},
    "TRANSMUTE_ITEM": {"name": "Shimmer In The Dark", "completed": false, "category": "other", "icon": "assets/images/Achievement_A_Shimmer_In_The_Dark.webp"},
    "BALEFUL_HARVEST": {"name": "Baleful Harvest", "completed": false, "category": "event", "icon": "assets/images/Achievement_Baleful_Harvest.webp"},
    "BEGONE_EVIL": {"name": "Begone, Evil!", "completed": false, "category": "other", "icon": "assets/images/Achievement_Begone_Evil.webp"},
    "BENCHED": {"name": "Benched", "completed": false, "category": "item", "icon": "assets/images/Achievement_Benched.webp"},
    "BIG_BOOTY": {"name": "Big Booty", "completed": false, "category": "other", "icon": "assets/images/Achievement_Big_Booty.webp"},
    // "GET_CELL_PHONE": {"name": "Black Mirror", "completed": false, "category": "item", "icon": "assets/images/Achievement_Black_Mirror.webp"},
    "BLOODBATH": {"name": "Bloodbath", "completed": false, "category": "event", "icon": "assets/images/Achievement_Bloodbath.webp"},
    "BONED": {"name": "Boned", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Boned.webp"},
    "GET_TERRASPARK_BOOTS": {"name": "Boots of the Hero", "completed": false, "category": "item", "icon": "assets/images/Achievement_Boots_of_the_Hero.webp"},
    "BUCKETS_OF_BOLTS": {"name": "Buckets of Bolts", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Buckets_of_Bolts.webp"},
    "BULLDOZER": {"name": "Bulldozer", "completed": false, "category": "other", "icon": "assets/images/Achievement_Bulldozer.webp"},
    "CHAMPION_OF_TERRARIA": {"name": "Champion of Terraria", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Champion_of_Terraria.webp"},
    "COMPLETELY_AWESOME": {"name": "Completely Awesome", "completed": false, "category": "item", "icon": "assets/images/Achievement_Completely_Awesome.webp"},
    "DIE_TO_DEAD_MANS_CHEST": {"name": "Dead Men Tell No Tales", "completed": false, "category": "other", "icon": "assets/images/Achievement_Dead_Men_Tell_No_Tales.webp"},
    "DECEIVER_OF_FOOLS": {"name": "Deceiver of Fools", "completed": false, "category": "enemy", "icon": "assets/images/Achievement_Deceiver_of_Fools.webp"},
    "DEFEAT_DREADNAUTILUS": {"name": "Don't Dread on Me", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Dont_Dread_on_Me.webp"},
    "DO_YOU_WANT_TO_SLAY_A_SNOWMAN": {"name": "Do You Want to Slay a Snowman?", "completed": false, "category": "event", "icon": "assets/images/Achievement_Do_You_Want_to_Slay_a_Snowman.webp"},
    "DRAX_ATTAX": {"name": "Drax Attax", "completed": false, "category": "item", "icon": "assets/images/Achievement_Drax_Attax.webp"},
    "DUNGEON_HEIST": {"name": "Dungeon Heist", "completed": false, "category": "other", "icon": "assets/images/Achievement_Dungeon_Heist.webp"},
    "DYE_HARD": {"name": "Dye Hard", "completed": false, "category": "other", "icon": "assets/images/Achievement_Dye_Hard.webp"},
    "EXTRA_SHINY": {"name": "Extra Shiny!", "completed": false, "category": "other", "icon": "assets/images/Achievement_Extra_Shiny.webp"},
    "EYE_ON_YOU": {"name": "Eye on You", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Eye_on_You.webp"},
    "DEFEAT_EMPRESS_OF_LIGHT": {"name": "Fae Flayer", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Fae_Flayer.webp"},
    "FASHION_STATEMENT": {"name": "Fashion Statement", "completed": false, "category": "other", "icon": "assets/images/Achievement_Fashion_Statement.webp"},
    "GET_GOLDEN_DELIGHT": {"name": "Feast of Midas", "completed": false, "category": "item", "icon": "assets/images/Achievement_Feast_of_Midas.webp"},
    "PET_THE_PET": {"name": "Feeling Petty", "completed": false, "category": "npc", "icon": "assets/images/Achievement_Feeling_Petty.webp"},
    "FISH_OUT_OF_WATER": {"name": "Fish Out of Water", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Fish_Out_of_Water.webp"},
    "FUNKYTOWN": {"name": "Funkytown", "completed": false, "category": "other", "icon": "assets/images/Achievement_Funkytown.webp"},
    "GELATIN_WORLD_TOUR": {"name": "Gelatin World Tour", "completed": false, "category": "enemy", "icon": "assets/images/Achievement_Gelatin_World_Tour.webp"},
    "GET_A_LIFE": {"name": "Get a Life", "completed": false, "category": "item", "icon": "assets/images/Achievement_Get_a_Life.webp"},
    // "GLORIOUS_GOLDEN_POLE": {"name": "Glorious Golden Pole", "completed": false, "category": "fish", "icon": "assets/images/Achievement_Glorious_Golden_Pole.webp"},
    "GOBLIN_PUNTER": {"name": "Goblin Punter", "completed": false, "category": "event", "icon": "assets/images/Achievement_Goblin_Punter.webp"},
    "HEAD_IN_THE_CLOUDS": {"name": "Head in the Clouds", "completed": false, "category": "item", "icon": "assets/images/Achievement_Head_in_the_Clouds.webp"},
    "HEART_BREAKER": {"name": "Heart Breaker", "completed": false, "category": "item", "icon": "assets/images/Achievement_Heart_Breaker.webp"},
    "HEAVY_METAL": {"name": "Heavy Metal", "completed": false, "category": "item", "icon": "assets/images/Achievement_Heavy_Metal.webp"},
    "TURN_GNOME_TO_STATUE": {"name": "Heliophobia", "completed": false, "category": "other", "icon": "assets/images/Achievement_Heliophobia.webp"},
    "DEFEAT_OLD_ONES_ARMY_TIER3": {"name": "Hero of Etheria", "completed": false, "category": "event", "icon": "assets/images/Achievement_Hero_of_Etheria.webp"},
    "FIND_A_FAIRY": {"name": "Hey! Listen!", "completed": false, "category": "npc", "icon": "assets/images/Achievement_Hey_Listen.webp"},
    "HOLD_ON_TIGHT": {"name": "Hold on Tight!", "completed": false, "category": "item", "icon": "assets/images/Achievement_Hold_on_Tight.webp"},
    "GO_LAVA_FISHING": {"name": "Hot Reels!", "completed": false, "category": "fish", "icon": "assets/images/Achievement_Hot_Reels.webp"},
    "ICE_SCREAM": {"name": "Ice Scream", "completed": false, "category": "event", "icon": "assets/images/Achievement_Ice_Scream.webp"},
    "GET_ZENITH": {"name": "Infinity +1 Sword", "completed": false, "category": "item", "icon": "assets/images/Achievement_Infinity_1_Sword.webp"},
    "INTO_ORBIT": {"name": "Into Orbit", "completed": false, "category": "other", "icon": "assets/images/Achievement_Into_Orbit.webp"},
    "ITS_GETTING_HOT_IN_HERE": {"name": "It's Getting Hot in Here", "completed": false, "category": "other", "icon": "assets/images/Achievement_Its_Getting_Hot_in_Here.webp"},
    "ITS_HARD": {"name": "It's Hard!", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Its_Hard.webp"},
    "IT_CAN_TALK": {"name": "It Can Talk?!", "completed": false, "category": "npc", "icon": "assets/images/Achievement_It_Can_Talk.webp"},
    "I_AM_LOOT": {"name": "I Am Loot!", "completed": false, "category": "other", "icon": "assets/images/Achievement_I_Am_Loot.webp"},
    "JEEPERS_CREEPERS": {"name": "Jeepers Creepers", "completed": false, "category": "other", "icon": "assets/images/Achievement_Jeepers_Creepers.webp"},
    "THROW_A_PARTY": {"name": "Jolly Jamboree", "completed": false, "category": "event", "icon": "assets/images/Achievement_Jolly_Jamboree.webp"},
    "DEFEAT_QUEEN_SLIME": {"name": "Just Desserts", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Just_Desserts.webp"},
    "KILL_THE_SUN": {"name": "Kill the Sun", "completed": false, "category": "event", "icon": "assets/images/Achievement_Kill_the_Sun.webp"},
    "TALK_TO_NPC_AT_MAX_HAPPINESS": {"name": "Leading Landlord", "completed": false, "category": "npc", "icon": "assets/images/Achievement_Leading_Landlord.webp"},
    "LIHZAHRDIAN_IDOL": {"name": "Lihzahrdian Idol", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Lihzahrdian_Idol.webp"},
    "LIKE_A_BOSS": {"name": "Like a Boss", "completed": false, "category": "item", "icon": "assets/images/Achievement_Like_a_Boss.webp"},
    "LUCKY_BREAK": {"name": "Lucky Break", "completed": false, "category": "other", "icon": "assets/images/Achievement_Lucky_Break.webp"},
    "MARATHON_MEDALIST": {"name": "Marathon Medalist", "completed": false, "category": "other", "icon": "assets/images/Achievement_Marathon_Medalist.webp"},
    "MASTERMIND": {"name": "Mastermind", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Mastermind.webp"},
    "MATCHING_ATTIRE": {"name": "Matching Attire", "completed": false, "category": "other", "icon": "assets/images/Achievement_Matching_Attire.webp"},
    "MECHA_MAYHEM": {"name": "Mecha Mayhem", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Mecha_Mayhem.webp"},
    "MINER_FOR_FIRE": {"name": "Miner for Fire", "completed": false, "category": "item", "icon": "assets/images/Achievement_Miner_for_Fire.webp"},
    "NOT_THE_BEES": {"name": "Not the Bees!", "completed": false, "category": "other", "icon": "assets/images/Achievement_Not_the_Bees.webp"},
    "NO_HOBO": {"name": "No Hobo", "completed": false, "category": "npc", "icon": "assets/images/Achievement_No_Hobo.webp"},
    "OBSESSIVE_DEVOTION": {"name": "Obsessive Devotion", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Obsessive_Devotion.webp"},
    "OOO_SHINY": {"name": "Ooo! Shiny!", "completed": false, "category": "other", "icon": "assets/images/Achievement_Ooo_Shiny.webp"},
    "PHOTOSYNTHESIS": {"name": "Photosynthesis", "completed": false, "category": "other", "icon": "assets/images/Achievement_Photosynthesis.webp"},
    "PRETTY_IN_PINK": {"name": "Pretty in Pink", "completed": false, "category": "enemy", "icon": "assets/images/Achievement_Pretty_in_Pink.webp"},
    "PRISMANCER": {"name": "Prismancer", "completed": false, "category": "item", "icon": "assets/images/Achievement_Prismancer.webp"},
    "FOUND_GRAVEYARD": {"name": "Quiet Neighborhood", "completed": false, "category": "other", "icon": "assets/images/Achievement_Quiet_Neighborhood.webp"},
    "RAINBOWS_AND_UNICORNS": {"name": "Rainbows and Unicorns", "completed": false, "category": "other", "icon": "assets/images/Achievement_Rainbows_and_Unicorns.webp"},
    "REAL_ESTATE_AGENT": {"name": "Real Estate Agent", "completed": false, "category": "npc", "icon": "assets/images/Achievement_Real_Estate_Agent.webp"},
    "ROBBING_THE_GRAVE": {"name": "Robbing the Grave", "completed": false, "category": "item", "icon": "assets/images/Achievement_Robbing_the_Grave.webp"},
    "ROCK_BOTTOM": {"name": "Rock Bottom", "completed": false, "category": "other", "icon": "assets/images/Achievement_Rock_Bottom.webp"},
    "SICK_THROW": {"name": "Sick Throw", "completed": false, "category": "item", "icon": "assets/images/Achievement_Sick_Throw.webp"},
    "SLAYER_OF_WORLDS": {"name": "Slayer of Worlds", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Slayer_of_Worlds.webp"},
    "SLIPPERY_SHINOBI": {"name": "Slippery Shinobi", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Slippery_Shinobi.webp"},
    "SMASHING_POPPET": {"name": "Smashing, Poppet!", "completed": false, "category": "other", "icon": "assets/images/Achievement_Smashing,_Poppet.webp"},
    "STAR_DESTROYER": {"name": "Star Destroyer", "completed": false, "category": "event", "icon": "assets/images/Achievement_Star_Destroyer.webp"},
    "STAR_POWER": {"name": "Star Power", "completed": false, "category": "other", "icon": "assets/images/Achievement_Star_Power.webp"},
    "STICKY_SITUATION": {"name": "Sticky Situation", "completed": false, "category": "event", "icon": "assets/images/Achievement_Sticky_Situation.webp"},
    "STILL_HUNGRY": {"name": "Still Hungry", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Still_Hungry.webp"},
    "STING_OPERATION": {"name": "Sting Operation", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Sting_Operation.webp"},
    "OBTAIN_HAMMER": {"name": "Stop! Hammer Time!", "completed": false, "category": "item", "icon": "assets/images/Achievement_Stop_Hammer_Time.webp"},
    "SWORD_OF_THE_HERO": {"name": "Sword of the Hero", "completed": false, "category": "item", "icon": "assets/images/Achievement_Sword_of_the_Hero.webp"},
    "TEMPLE_RAIDER": {"name": "Temple Raider", "completed": false, "category": "other", "icon": "assets/images/Achievement_Temple_Raider.webp"},
    "THERE_ARE_SOME_WHO_CALL_HIM": {"name": "There are Some Who Call Him...", "completed": false, "category": "enemy", "icon": "assets/images/Achievement_There_are_Some_Who_Call_Him.webp"},
    "THE_CAVALRY": {"name": "The Cavalry", "completed": false, "category": "other", "icon": "assets/images/Achievement_The_Cavalry.webp"},
    "FREQUENT_FLYER": {"name": "The Frequent Flyer", "completed": false, "category": "other", "icon": "assets/images/Achievement_The_Frequent_Flyer.webp"},
    "ALL_TOWN_SLIMES": {"name": "The Great Slime Mitosis", "completed": false, "category": "npc", "icon": "assets/images/Achievement_The_Great_Slime_Mitosis.webp"},
    "THE_GREAT_SOUTHERN_PLANTKILL": {"name": "The Great Southern Plantkill", "completed": false, "category": "boss", "icon": "assets/images/Achievement_The_Great_Southern_Plantkill.webp"},
    "THROWING_LINES": {"name": "Throwing Lines", "completed": false, "category": "other", "icon": "assets/images/Achievement_Throwing_Lines.webp"},
    "TIL_DEATH": {"name": "Til Death...", "completed": false, "category": "enemy", "icon": "assets/images/Achievement_Til_Death.webp"},
    "TIMBER": {"name": "Timber!!", "completed": false, "category": "other", "icon": "assets/images/Achievement_Timber.webp"},
    "TIN_FOIL_HATTER": {"name": "Tin-Foil Hatter", "completed": false, "category": "event", "icon": "assets/images/Achievement_Tin-Foil_Hatter.webp"},
    "TOPPED_OFF": {"name": "Topped Off", "completed": false, "category": "other", "icon": "assets/images/Achievement_Topped_Off.webp"},
    "GAIN_TORCH_GODS_FAVOR": {"name": "Torch God", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Torch_God.webp"},
    "TO_INFINITY_AND_BEYOND": {"name": "To Infinity... and Beyond!", "completed": false, "category": "other", "icon": "assets/images/Achievement_To_Infinity.webp"},
    "DRINK_BOTTLED_WATER_WHILE_DROWNING": {"name": "Unusual Survival Strategies", "completed": false, "category": "other", "icon": "assets/images/Achievement_Unusual_Survival_Strategies.webp"},      
    "VEHICULAR_MANSLAUGHTER": {"name": "Vehicular Manslaughter", "completed": false, "category": "enemy", "icon": "assets/images/Achievement_Vehicular_Manslaughter.webp"},
    "WALK_THE_PLANK": {"name": "Walk the Plank", "completed": false, "category": "event", "icon": "assets/images/Achievement_Walk_the_Plank.webp"},
    "WATCH_YOUR_STEP": {"name": "Watch Your Step!", "completed": false, "category": "other", "icon": "assets/images/Achievement_Watch_Your_Step.webp"},
    "WHERES_MY_HONEY": {"name": "Where's My Honey?", "completed": false, "category": "other", "icon": "assets/images/Achievement_Wheres_My_Honey.webp"},
    "WORM_FODDER": {"name": "Worm Fodder", "completed": false, "category": "boss", "icon": "assets/images/Achievement_Worm_Fodder.webp"},
    "YOU_AND_WHAT_ARMY": {"name": "You and What Army?", "completed": false, "category": "other", "icon": "assets/images/Achievement_You_and_What_Army.webp"},
    // "SERVANT_IN_TRAINING": {"name": "Servant-in-Training", "completed": false, "category": "fish", "icon": "assets/images/Achievement_Servant-in-Training.webp"},
    // "GOOD_LITTLE_SLAVE": {"name": "Good Little Slave", "completed": false, "category": "fish", "icon": "assets/images/Achievement_Good_Little_Slave.webp"},
    // "TROUT_MONKEY": {"name": "Trout Monkey", "completed": false, "category": "fish", "icon": "assets/images/Achievement_Trout_Monkey.webp"},
    // "FAST_AND_FISHIOUS": {"name": "Fast and Fishious", "completed": false, "category": "fish", "icon": "assets/images/Achievement_Fast_and_Fishious.webp"},
    // "SUPREME_HELPER_MINION": {"name": "Supreme Helper Minion!", "completed": false, "category": "fish", "icon": "assets/images/Achievement_Supreme_Helper_Minion.webp"},
    "YOU_CAN_DO_IT": {"name": "You Can Do It!", "completed": false, "category": "other", "icon": "assets/images/Achievement_You_Can_Do_It.webp"}
  };

  otherAchs: any = {
    "GELATIN_WORLD_TOUR": {"name": "Slimes", "value": 0, "max_value": 24, "icon": "assets/images/Achievement_Gelatin_World_Tour.webp"},
    "BULLDOZER": {"name": "Tiles", "value": 0, "max_value": 10000, "icon": "assets/images/Achievement_Bulldozer.webp"},
    "MARATHON_MEDALIST": {"name": "Distance", "value": 0, "max_value": 26.2, "max_pixels": 1106688, "icon": "assets/images/Achievement_Marathon_Medalist.webp"},
    "SLAYER_OF_WORLDS": {"name": "Bosses", "value": 0, "max_value": 15, "icon": "assets/images/Achievement_Slayer_of_Worlds.webp"},
    "ZENITH": {"name": "Swords", "value": 0, "max_value": 10, "icon": "assets/images/Achievement_Infinity_1_Sword.webp"}
    // "SUPREME_HELPER_MINION": {"name": "Quests", "value": 0, "max_value": 200, "icon": "assets/images/Achievement_Supreme_Helper_Minion.webp"}
  };

  fishing: any = [
    "SERVANT_IN_TRAINING", "GOOD_LITTLE_SLAVE", "TROUT_MONKEY",
    "FAST_AND_FISHIOUS", "SUPREME_HELPER_MINION", "GLORIOUS_GOLDEN_POLE",
    "GET_CELL_PHONE"
  ];

  npcs: any = {
    // Slimes
    "NPC_KILLED_-3": {"name": "Green Slime", "icon": "assets/EnemyIcons/Green_Slime.webp", "defeated": false, "order": 1},
    "NPC_KILLED_1": {"name": "Blue Slime", "icon": "assets/EnemyIcons/Blue_Slime.webp", "defeated": false, "order": 2},
    "NPC_KILLED_-9": {"name": "Yellow Slime", "icon": "assets/EnemyIcons/Yellow_Slime.webp", "defeated": false, "order": 3},
    "NPC_KILLED_-8": {"name": "Red Slime", "icon": "assets/EnemyIcons/Red_Slime.webp", "defeated": false, "order": 4},
    "NPC_KILLED_-4": {"name": "Pinky", "icon": "assets/EnemyIcons/Pinky.webp", "defeated": false, "order": 5},
    "NPC_KILLED_-7": {"name": "Purple Slime", "icon": "assets/EnemyIcons/Purple_Slime.webp", "defeated": false, "order": 6},
    "NPC_KILLED_-5": {"name": "Baby Slime", "icon": "assets/EnemyIcons/Baby_Slime.webp", "defeated": false, "order": 7},
    "NPC_KILLED_16": {"name": "Mother Slime", "icon": "assets/EnemyIcons/Mother_Slime.webp", "defeated": false, "order": 8},
    "NPC_KILLED_147": {"name": "Ice Slime", "icon": "assets/EnemyIcons/Ice_Slime.webp", "defeated": false, "order": 9},
    "NPC_KILLED_184": {"name": "Spiked Ice Slime", "icon": "assets/EnemyIcons/Spiked_Ice_Slime.webp", "defeated": false, "order": 10},
    "NPC_KILLED_-10": {"name": "Jungle Slime", "icon": "assets/EnemyIcons/Jungle_Slime.webp", "defeated": false, "order": 11},
    "NPC_KILLED_204": {"name": "Spiked Jungle Slime", "icon": "assets/EnemyIcons/Spiked_Jungle_Slime.webp", "defeated": false, "order": 12},
    "NPC_KILLED_59": {"name": "Lava Slime", "icon": "assets/EnemyIcons/Lava_Slime.webp", "defeated": false, "order": 13},
    "NPC_KILLED_-6": {"name": "Black Slime", "icon": "assets/EnemyIcons/Black_Slime.webp", "defeated": false, "order": 14},
    "NPC_KILLED_225": {"name": "Umbrella Slime", "icon": "assets/EnemyIcons/Umbrella_Slime.webp", "defeated": false, "order": 15},
    "NPC_KILLED_71": {"name": "Dungeon Slime", "icon": "assets/EnemyIcons/Dungeon_Slime.webp", "defeated": false, "order": 16},
    "NPC_KILLED_183": {"name": "Crimslime", "icon": "assets/EnemyIcons/Crimslime.webp", "defeated": false, "order": 17},
    "NPC_KILLED_81": {"name": "Corrupt Slime", "icon": "assets/EnemyIcons/Corrupt_Slime.webp", "defeated": false, "order": 18},
    "NPC_KILLED_-1": {"name": "Slimeling", "icon": "assets/EnemyIcons/Slimeling.webp", "defeated": false, "order": 19},
    "NPC_KILLED_-2": {"name": "Slimer", "icon": "assets/EnemyIcons/Slimer.webp", "defeated": false, "order": 20},
    "NPC_KILLED_141": {"name": "Toxic Sludge", "icon": "assets/EnemyIcons/Toxic_Sludge.webp", "defeated": false, "order": 21},
    "NPC_KILLED_244": {"name": "Rainbow Slime", "icon": "assets/EnemyIcons/Rainbow_Slime.webp", "defeated": false, "order": 22},
    "NPC_KILLED_138": {"name": "Illuminant Slime", "icon": "assets/EnemyIcons/Illuminant_Slime.webp", "defeated": false, "order": 23},

    // Bosses
    "NPC_KILLED_50": {"name": "King Slime", "icon": "assets/EnemyIcons/King_Slime.webp", "defeated": false, "order": 24},
    "NPC_KILLED_4": {"name": "Eye of Cthulhu", "icon": "assets/EnemyIcons/Eye_of_Cthulhu.webp", "defeated": false, "order": 25},
    "NPC_KILLED_13": {"name": "Eater of Worlds", "icon": "assets/EnemyIcons/Eater_of_Worlds.webp", "defeated": false, "order": 26},
    "NPC_KILLED_266": {"name": "Brain of Cthulhu", "icon": "assets/EnemyIcons/Brain_of_Cthulhu.webp", "defeated": false, "order": 27},
    "NPC_KILLED_35": {"name": "Skeletron", "icon": "assets/EnemyIcons/Skeletron.webp", "defeated": false, "order": 28},
    "NPC_KILLED_222": {"name": "Queen Bee", "icon": "assets/EnemyIcons/Queen_Bee.webp", "defeated": false, "order": 29},
    "NPC_KILLED_113": {"name": "Wall of Flesh", "icon": "assets/EnemyIcons/Wall_of_Flesh.webp", "defeated": false, "order": 30},
    "NPC_KILLED_134": {"name": "Destroyer", "icon": "assets/EnemyIcons/Destroyer.webp", "defeated": false, "order": 31},
    "NPC_KILLED_127": {"name": "Skeletron Prime", "icon": "assets/EnemyIcons/Skeletron_Prime.webp", "defeated": false, "order": 32},
    "NPC_KILLED_125": {"name": "Twins", "icon": "assets/EnemyIcons/Twins.webp", "defeated": false, "order": 33},
    "NPC_KILLED_262": {"name": "Plantera", "icon": "assets/EnemyIcons/Plantera.webp", "defeated": false, "order": 34},
    "NPC_KILLED_245": {"name": "Golem", "icon": "assets/EnemyIcons/Golem.webp", "defeated": false, "order": 35},
    "NPC_KILLED_370": {"name": "Duke Fishron", "icon": "assets/EnemyIcons/Duke_Fishron.webp", "defeated": false, "order": 36},
    "NPC_KILLED_439": {"name": "Cultist", "icon": "assets/EnemyIcons/Lunatic_Cultist.webp", "defeated": false, "order": 37},
    "NPC_KILLED_398": {"name": "Moon Lord", "icon": "assets/EnemyIcons/Moon_Lord.webp", "defeated": false, "order": 38}
  };

  swords: any = [
    "assets/Swords/Copper_Shortsword.webp",
    "assets/Swords/Enchanted_Sword.webp",
    "assets/Swords/Starfury.webp",
    "assets/Swords/Bee_Keeper.webp",
    "assets/Swords/Seedler.webp",
    "assets/Swords/Terra_Blade.webp",
    "assets/Swords/Influx_Waver.webp",
    "assets/Swords/The_Horsemans_Blade.webp",
    "assets/Swords/Star_Wrath.webp",
    "assets/Swords/Meowmere.webp"
  ];
    

  displayMissing: any = false;
  category: any = "all";
  n_achievements: number = Object.keys(this.achievements).length;
  n_complete: number = 0;

  refreshTime: string = "";
  refreshMin: number = 0;
  refreshSec: number = 0;

  showAllAch: any = false;
  colorIncomplete: any = false;


  ngOnInit() {

    // How often the achievements refresh
    setInterval(() => {
      this.getAchievementsFromFile();
    }, 120000); // 2 minutes in milliseconds

    setInterval(() => {
      if(this.refreshSec >= 59) {
        this.refreshSec = -1;
        this.refreshMin++;
      }

      if(this.refreshMin >= 2) {
        this.refreshMin = 0;
      }

      this.refreshSec++;

      if(this.refreshMin === 0) {
        this.refreshTime = this.refreshSec.toString() + " sec";
      }
      else {
        this.refreshTime = this.refreshMin.toString() + " min " + this.refreshSec.toString() + " sec";
      }
    }, 1000)
  }


  getAchievementsFromFile() {
    this.appService.getAchievements().subscribe((achs: any) => {
      Object.keys(achs).forEach((ach: any) => {
        // Skip fishing achievements
        if(!this.fishing.includes(ach)) {
          var all_cond_completed = true;
          Object.keys(achs[ach]['Conditions']).forEach((cond: any) => {
            if(achs[ach]['Conditions'][cond]["Completed"] === false) {
              all_cond_completed = false;
            }

            if(Object.keys(this.otherAchs).includes(ach)) {
              if(ach === "GELATIN_WORLD_TOUR") {
                // Dont count king slime here, it is counted in slayer of worlds
                if(cond !== "NPC_KILLED_50") {
                  if(!this.npcs[cond]["defeated"] && achs[ach]["Conditions"][cond]["Completed"]) {
                    this.otherAchs["GELATIN_WORLD_TOUR"]["value"]++;
                  }
                  else if(this.npcs[cond]["defeated"] && !achs[ach]["Conditions"][cond]["Completed"]) {
                    this.otherAchs["GELATIN_WORLD_TOUR"]["value"]--;
                  }

                  this.npcs[cond]["defeated"] = achs[ach]["Conditions"][cond]["Completed"];
                }
              }
              else if(ach === "BULLDOZER") {
                this.otherAchs["BULLDOZER"]["value"] = achs[ach]["Conditions"][cond]["Value"];
              }
              else if(ach === "MARATHON_MEDALIST") {
                // value is in pixels, miles = total pixels / (16 pixels * 1/2 * 5280)
                this.otherAchs["MARATHON_MEDALIST"]["value"] = Math.round((achs[ach]["Conditions"][cond]["Value"] / 42240) * 100) / 100;
              }
              else if(ach === "SLAYER_OF_WORLDS") {
                if(!this.npcs[cond]["defeated"] && achs[ach]["Conditions"][cond]["Completed"]) {
                  this.otherAchs["SLAYER_OF_WORLDS"]["value"]++;

                  if(cond === "NPC_KILLED_50") {
                    this.otherAchs["GELATIN_WORLD_TOUR"]["value"]++;
                  }
                }
                else if(this.npcs[cond]["defeated"] && !achs[ach]["Conditions"][cond]["Completed"]) {
                  this.otherAchs["SLAYER_OF_WORLDS"]["value"]--;

                  if(cond === "NPC_KILLED_50") {
                    this.otherAchs["GELATIN_WORLD_TOUR"]["value"]--;
                  }
                }
                
                this.npcs[cond]["defeated"] = achs[ach]["Conditions"][cond]["Completed"];
                
              }
              else if(ach === "SUPREME_HELPER_MINION") {
                this.otherAchs["SUPREME_HELPER_MINION"]["value"] = achs[ach]["Conditions"][cond]["Value"];
              }
            }
          });

          if(!this.achievements[ach]['completed'] && all_cond_completed) {
            this.n_complete += 1;
            this.achievements[ach]['completed'] = true;
          }
          else if(this.achievements[ach]['completed'] && !all_cond_completed) {
            this.n_complete -= 1;
            this.achievements[ach]['completed'] = false;
          }
        }
      });
    })
  }

  checkSword(e: any) {
    if(e['target']['checked']) {
      this.otherAchs['ZENITH']['value']++;
    }
    else {
      this.otherAchs['ZENITH']['value']--;
    }
  }

  toggleCompletedInMarq(e: any) {
    if(e['target']['checked']) {
      this.showAllAch = true;
    }
    else {
      this.showAllAch = false;
    }
  }

  toggleColorForIncomplete(e: any) {
    if(e['target']['checked']) {
      this.colorIncomplete = true;
    }
    else {
      this.colorIncomplete = false;
    }
  }

  toggleGrayscale(e: any) {
    var ele = e.target;
    this.achievements[ele.id]["completed"] = !this.achievements[ele.id]["completed"];
    if(this.achievements[ele.id]["completed"] === true) {
      this.n_complete += 1;
    }
    else {
      this.n_complete -= 1;
    }
  }

  toggleMissing() {
    this.displayMissing = !this.displayMissing;
  }

  toggleCategory(cat: any) {
    this.category = cat;
  }

  getKeys(obj: any, i: number = -1) {
    if(i === 0) {
      var undefeatedNpcs: any = [];
      Object.keys(this.npcs).forEach((npc: any) => {
        if(!this.npcs[npc]['defeated']) {
          undefeatedNpcs.push(npc);
        }
      })
      return undefeatedNpcs;
    }
    else if(i === 1 && this.n_complete !== this.n_achievements && !this.showAllAch) {
      var incomplete: any = [];
      Object.keys(this.achievements).forEach((ach: any) => {
        if(!this.achievements[ach]['completed']) {
          incomplete.push(ach);
        }
      })
      return incomplete;
    }
    return Object.keys(obj);
  }

  getIcon(key: any, i: number) {
    if(i === 0) {
      return this.npcs[key]['icon'];
    }
    else if(i === 1) {
      return this.achievements[key]['icon'];
    }
    else {
      return this.otherAchs[key]['icon'];
    }
  }

  showNpc(key: any) {
    return !this.npcs[key]['defeated'];
  }

  getNpcName(npc: any) {
    return this.npcs[npc]['name'];
  }

  allNpcsDefeated() {
    var undefeated: any = this.getKeys(this.npcs, 0);
    return (undefeated.length === 0);
  }

  keyOrder = (a: any, b: any): number => {
    return this.npcs[b.value]["order"] > this.npcs[a.value]["order"] ? -1 : (this.npcs[a.value]["order"] > this.npcs[b.value]["order"] ? 1 : 0);
  }
}
