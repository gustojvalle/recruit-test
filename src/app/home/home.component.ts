import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

const ALL_EMOJIS = "😀😁😂😃😄😅😆 😇 😈 👿 😉 😊 ☺️ 😋 😌 😍 😎 😏 😐 😑 😒 😓 😔 😕 😖 😗 😘 😙 😚 😛 😜 😝 😞 😟 😠 😡 😢 😣 😤 😥 😦 😧 😨 😩 😪 😫 😬 😭 😮 😯 😰 😱 😲 😳 😴 😵 😶 😷 😸 😹 😺 😻 😼 😽 😾 😿 🙀 👣 👤 👥 👶 👶🏻 👶🏼 👶🏽 👶🏾 👶🏿 👦 👦🏻 👦🏼 👦🏽 👦🏾 👦🏿 👧 👧🏻 👧🏼 👧🏽 👧🏾 👧🏿 👨 👨🏻 👨🏼 👨🏽 👨🏾 👨🏿 👩 👩🏻 👩🏼 👩🏽 👩🏾 👩🏿 👪 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👫 👬 👭 👯 👰 👰🏻 👰🏼 👰🏽 👰🏾 👰🏿 👱 👱🏻 👱🏼 👱🏽 👱🏾 👱🏿 👲 👲🏻 👲🏼 👲🏽 👲🏾 👲🏿 👳 👳🏻 👳🏼 👳🏽 👳🏾 👳🏿 👴 👴🏻 👴🏼 👴🏽 👴🏾 👴🏿 👵 👵🏻 👵🏼 👵🏽 👵🏾 👵🏿 👮 👮🏻 👮🏼 👮🏽 👮🏾 👮🏿 👷 👷🏻 👷🏼 👷🏽 👷🏾 👷🏿 👸 👸🏻 👸🏼 👸🏽 👸🏾 👸🏿 💂 💂🏻 💂🏼 💂🏽 💂🏾 💂🏿 👼 👼🏻 👼🏼 👼🏽 👼🏾 👼🏿 🎅 🎅🏻 🎅🏼 🎅🏽 🎅🏾 🎅🏿 👻 👹 👺 💩 💀 👽 👾 🙇 🙇🏻 🙇🏼 🙇🏽 🙇🏾 🙇🏿 💁 💁🏻 💁🏼 💁🏽 💁🏾 💁🏿 🙅 🙅🏻 🙅🏼 🙅🏽 🙅🏾 🙅🏿 🙆 🙆🏻 🙆🏼 🙆🏽 🙆🏾 🙆🏿 🙋 🙋🏻 🙋🏼 🙋🏽 🙋🏾 🙋🏿 🙎 🙎🏻 🙎🏼 🙎🏽 🙎🏾 🙎🏿 🙍 🙍🏻 🙍🏼 🙍🏽 🙍🏾 🙍🏿 💆 💆🏻 💆🏼 💆🏽 💆🏾 💆🏿 💇 💇🏻 💇🏼 💇🏽 💇🏾 💇🏿 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 🙌 🙌🏻 🙌🏼 🙌🏽 🙌🏾 🙌🏿 👏🍂 🍃 🍄 🌰 🐀 🐁 🐭 🐹 🐂 🐃 🐄 🐮 🐅 🐆 🐯 🐇 🐰 🐈 🐱 🐎 🐴 🐏 🐑 🐐 🐓 🐔 🐤 🐣 🐥 🐦 🐧 🐘 🐪 🐫 🐗 🐖 🐷 🐽 🐕   🐩 🐶 🐺 🐻 🐨 🐼 🐵 🙈  🙉 🙊 🐒 🐉 🐲 🐊 🐍 🐢 🐸 🐋 🐳 🐬 🐙 🐟 🐠 🐡 🐚 🐌 🐛 ⛳️ 🏆 🎽 🏁 🎹 🎸 🎻 🎷 🎺 🎵 🎶 🎼 🎧 🎤 🎭 🎫 🎩 🎪 🎬 🎨 🎯 🎱 🎳 🎰 🎲 🎮 🎴 🃏 🀄️ 🎠 🎡 🎢 🚃 🚞 🚂 🚋 🚝 🚄 🚅 🚆 🚇 🚈 🚉 🚊 🚌 🚍 🚎 🚐 🚑 🚒 🚓 🚔 🚨 🚕 🚖 🚗 🚘 🚙 🚚 🚛 🚜 🚲 🚏 ⛽️ 🚧 🚦 🚥 🚀 🚁 ✈️ 💺 ⚓️ 🚢 🚤 ⛵️ 🚡 🚠 🚟 🛂 🛃 🛄 🛅 💴 💶 💷 💵 🗽 🗿 🌁 🗼 ⛲️ 🏰 🏯 🌇 🌆 🌃 🌉 🏠 🏡 🏢 🏬 🏭 🏣 🏤 🏥 🏦 🏨 🏩 💒 ⛪️ 🏪 🏫 🇦🇺 🇦🇹 🇧🇪 🇧🇷 🇨🇦 🇨🇱 🇨🇳 🇨🇴 🇩🇰 🇫🇮 🇫🇷 🇩🇪 🇭🇰 🇮🇳 🇮🇩 🇮🇪 🇮🇱 🇮🇹 🇯🇵 🇰🇷 🇲🇴 🇲🇾 🇲🇽 🇳🇱 🇳🇿 🇳🇴 🇵🇭 🇵🇱 🇵🇹 🇵🇷 🇷🇺 🇸🇦 🇸🇬 🇿🇦 🇪🇸 🇸🇪 🇨🇭 🇹🇷 🇬🇧 🇺🇸 🇦🇪 🇻🇳 ⌚️ 📱 📲 💻 ⏰ ⏳ ⌛️ 📷 📹 🎥 📺 📻 📟 📞 ☎️ 📠 💽 💾 💿 📀 📼 🔋 🔌 💡 🔦 📡 💳 💸 💰 💎 🌂 👝 👛 👜 💼 🎒 💄 👓 👒 👡 👠 👢 👞 👟 👙 👗 👘 👚 👕 👔 👖 🚪 🚿 🛁 🚽 💈 💉 💊 🔬 🔭 🔮 🔧 🔪 🔩 🔨 💣 🚬 🔫 🔖 📰 🔑 ✉️ 📩 📨 📧 📥 📤 📦 📯 📮 📪 📫 📬 📭 📄 📃 📑 📈 📉 📊 📅 📆 🔅 🔆 📜 📋 📖 📓 📔 📒 📕 📗 📘 📙 📚 📇 🔗 📎 📌 ✂️  📐 📍 📏 🚩 📁 📂 ✒️ ✏️ 📝 🔠 ℹ️ 📶 🎦 🔣 🕧";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  emojiArray: string[] = [];

  ngOnInit(): void {
    this.emojiArray = this.parseEmojis(ALL_EMOJIS);
  }

  async emojiClicked(emoji: string): Promise<void> {
    await this.apiService.submitVote(emoji);
    alert('Your vote has been submitted!');
  }

  // parseEmojis(emojiString: string, delimiter: string): string[] {
  //   let innerParse: ((e: string, d: string) => string[]) | null = null;
  //   innerParse = (e: string, d: string) => {
  //     const split = emojiString.split(d);
  //     const returnVal: string[] = [];
  //     for (const emoji of split) {
  //       if (emoji.length === 1) {
  //         returnVal.push(emoji);
  //       } else {
  //         try {
  //           returnVal.push(...(<(e: string, d: string) => string[]>innerParse)(emoji, '\t'));
  //         } catch (e) {
  //           console.error(e);
  //         }
  //       }
  //     }
  //     return returnVal;
  //   };

  //   return innerParse(emojiString, delimiter);
  // }
  //
  parseEmojis(emojiString: string) {
    return emojiString.split('').filter(emoji => emoji !== ' ' && emoji !== ' ')
  }
}
