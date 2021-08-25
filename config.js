//  ____  _           _    _                    _
// / ___|| | ___  ___| | _| |    ___   __ _  __| |
// \___ \| |/ _ \/ _ \ |/ / |   / _ \ / _` |/ _` |
//  ___) | |  __/  __/   <| |__| (_) | (_| | (_| |
// |____/|_|\___|\___|_|\_\_____\___/ \__,_|\__,_|
// version 2.17.1

// Loading screen language
//
// You can create or edit languages by
// editing/creating files in the languages folder
//
// Default available languages:
// "english"
// "brazilian_portuguese"
config.language = "english"

// Use an image for the logo instead of text
config.logo_use_image = false

// Image filename for the server logo
// (Place the image file in the images folder)
config.logo_image = "quimeralogo.png"

// Text to be shown on logo
config.logo_text = ""

// Use the server's name for the logo
config.logo_servername = false

// Center logo?
// "true" or "false"
config.logo_center = false

// Display current map and gamemode?
// "true" or "false"
config.logo_show_info = false

// Use a video for the background?
// Otherwise it will use images
// "true" or "false"
config.background_use_video = false

// Default available videos:
// "blue_rays.webm"
// "purple_blue_rays.webm"
// "green_rays.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format
// (Place the video file in the backgrounds/videos folder)
config.background_video = "purple_blue_rays.webm"

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// "true" or "false"
config.background_map_based = false

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the image files in the backgrounds/images folder)
config.background_images = [
	"background1.png",
	"background2.png",
	"background3.png",
        "background4.png",
]

// (Image-background only)
// Random background images order?
// "true" or "false"
config.background_images_random_order = true

// (Image-background only)
// Delay between background images changes
// in milliseconds
config.background_images_duration = 30000

// (Image-background only)
// Image background fade duration
// in milliseconds
config.background_images_fade_duration = 500

// Enable background overlay?
// "true" or "false"
config.background_overlay = true

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
config.background_darkening = 30

// Play music during the loading screen?
// "true" or "false"
config.music_enable = true

// Display current music name?
// "true" or "false"
config.music_show = false

// Music playlist
// Add as many youtube ids/urls or audio files you want
// (YouTube only works on Chromium beta)
// (Use ogg files for compatibility with default Gmod)
// (Place the audio files in the music folder)
config.music_playlist = [
	{
		name: "Star Wars: Duel of The Fates | TWO STEPS FROM HELL STYLE",
		youtube: "https://www.youtube.com/watch?v=PT7-JdKhzcU",
	},
	{
		name: "Star Wars: Bo-Katan Theme | EPIC VERSION",
		youtube: "https://www.youtube.com/watch?v=jZ2R9mgJwug",
	},
	{
		name: "Star Wars: General Grievous Epic Theme | Two Steps From Hell Style",
		youtube: "https://www.youtube.com/watch?v=H1wTd6BEawU",
	},
	{
		name: "Up is Down & Battle of The Heroes | EPIC VERSION",
		youtube: "https://www.youtube.com/watch?v=GBPDBYS5w0g",
	},
]

// Random music order?
// "true" or "false"
config.music_random_order = true

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
config.music_volume = 10

// Use Gmod volume for the music instead of manual volume
config.music_gmod_volume = true

// Enable custom messages?
// "true" or "false"
config.messages_enable = true

// Enter your custom messages below
config.messages_list = [
	"Bienvenido a Quimera!",
	"Recuerda Utilizar !discord para entrar a este y !reglas para evitar ser sancionado",
	"¿Sabias que el servidor anteriormente se iba a llamar Guri Networks?",
]

// Random message order?
// "true" or "false"
config.messages_random_order = false

// Delay between message changes
// in milliseconds
config.messages_delay = 1000

// Messages fade duration
// in milliseconds
config.messages_fade_duration = 5000

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// "true" or "false"
config.errors_show_ingame = true
