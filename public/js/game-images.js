(function (global) {
  'use strict';

  var GAME_ASSETS = {
    ace_racer: { src: '/assets/games/ace-racer.webp', fit: 'cover' },
    afk_journey: { src: '/assets/games/afk-journey.webp', fit: 'cover' },
    age_of_empires: { src: '/assets/games/age-of-empires-mobile.webp', fit: 'cover' },
    arena_breakout: { src: '/assets/games/arena-breakout.webp', fit: 'cover' },
    arena_breakout_infinite: { src: '/assets/games/arena-breakout-infinite.webp', fit: 'cover' },
    arena_of_valor: { src: '/assets/games/arena-of-valor.webp', fit: 'cover' },
    astral_guardians: { src: '/assets/games/astral-guardians-cyber-fantasy.webp', fit: 'cover' },
    be_the_king: { src: '/assets/games/be-the-king.webp', fit: 'cover' },
    black_clover: { src: '/assets/games/black-clover-mobile.webp', fit: 'cover' },
    blockman_go: { src: '/assets/games/blockman-go.webp', fit: 'cover' },
    blood_strike: { src: '/assets/games/blood-strike.webp', fit: 'cover' },
    codm: { src: '/assets/games/call-of-duty-mobile.webp', fit: 'cover' },
    castle_duels: { src: '/assets/games/castle-duels.webp', fit: 'cover' },
    chimeraland: { src: '/assets/games/chimeraland.webp', fit: 'cover' },
    clash_of_clans: { src: '/assets/games/clash-of-clans.webp', fit: 'cover' },
    conquer_online: { src: '/assets/games/conquer-online.webp', fit: 'cover' },
    delta_force: { src: '/assets/games/delta-force.webp', fit: 'cover' },
    delta_force_garena: { src: '/assets/games/delta-force-garena.webp', fit: 'cover' },
    dragon_raja: { src: '/assets/games/dragon-raja.webp', fit: 'cover' },
    dragonheir: { src: '/assets/games/dragonheir.webp', fit: 'cover' },
    dynasty_heroes: { src: '/assets/games/dynasty-heroes.webp', fit: 'cover' },
    dynasty_warriors: { src: '/assets/games/dynasty-warriors-overlords.webp', fit: 'cover' },
    ea_sports_fc: { src: '/assets/games/ea-sports-fc-mobile.webp', fit: 'cover' },
    eggy_party: { src: '/assets/games/eggy-party.webp', fit: 'cover' },
    farlight_84: { src: '/assets/games/farlight-84.webp', fit: 'cover' },
    football_master: { src: '/assets/games/football-master-2.webp', fit: 'cover' },
    ff: { src: '/assets/games/free-fire.webp', fit: 'cover' },
    ff_max: { src: '/assets/games/free-fire-max.webp', fit: 'cover' },
    garena: { src: '/assets/games/garena.webp', fit: 'contain' },
    garena_undawn: { src: '/assets/games/garena-undawn.webp', fit: 'cover' },
    genshin_impact: { src: '/assets/games/genshin-impact.webp', fit: 'cover' },
    growtopia: { src: '/assets/games/growtopia.webp', fit: 'cover' },
    hay_day: { src: '/assets/games/hay-day.webp', fit: 'cover' },
    honkai_impact: { src: '/assets/games/honkai-impact-3.webp', fit: 'cover' },
    honkai_star_rail: { src: '/assets/games/honkai-star-rail.webp', fit: 'cover' },
    honor_of_kings: { src: '/assets/games/honor-of-kings.webp', fit: 'cover' },
    hyper_front: { src: '/assets/games/hyper-front.webp', fit: 'cover' },
    identity_v: { src: '/assets/games/identity-v.webp', fit: 'cover' },
    infinite_borders: { src: '/assets/games/infinite-borders.webp', fit: 'cover' },
    king_of_avalon: { src: '/assets/games/king-of-avalon.webp', fit: 'cover' },
    league_of_legends: { src: '/assets/games/league-of-legends-wild-rift.webp', fit: 'cover' },
    lifeafter: { src: '/assets/games/lifeafter.webp', fit: 'cover' },
    light_of_thel: { src: '/assets/games/light-of-thel.webp', fit: 'cover' },
    light_of_thel_new_era: { src: '/assets/games/light-of-thel-new-era.webp', fit: 'cover' },
    lords_mobile: { src: '/assets/games/lords-mobile.webp', fit: 'cover' },
    love_and_deepspace: { src: '/assets/games/love-and-deepspace.webp', fit: 'cover' },
    mc: { src: '/assets/games/magic-chess.webp', fit: 'cover' },
    marvel_duel: { src: '/assets/games/marvel-duel.webp', fit: 'cover' },
    marvel_rivals: { src: '/assets/games/marvel-rivals.webp', fit: 'cover' },
    marvel_snap: { src: '/assets/games/marvel-snap.webp', fit: 'cover' },
    marvel_super_war: { src: '/assets/games/marvel-super-war.webp', fit: 'contain' },
    metal_slug: { src: '/assets/games/metal-slug-awakening.webp', fit: 'cover' },
    miko_era: { src: '/assets/games/miko-era-twelve-myths.webp', fit: 'cover' },
    ml: { src: '/assets/games/mobile-legends.webp', fit: 'cover' },
    ml_gift: { src: '/assets/games/mobile-legends-gift.webp', fit: 'cover' },
    ml_joki: { src: '/assets/games/mobile-legends-joki-ranked.webp', fit: 'cover' },
    monster_saga: { src: '/assets/games/monster-saga.webp', fit: 'cover' },
    nba_infinite: { src: '/assets/games/nba-infinite.webp', fit: 'cover' },
    omega_legends: { src: '/assets/games/omega-legends.webp', fit: 'cover' },
    one_punch_man: { src: '/assets/games/one-punch-man.webp', fit: 'cover' },
    point_blank: { src: '/assets/games/point-blank.webp', fit: 'contain' },
    pubg: { src: '/assets/games/pubg-mobile.webp', fit: 'cover' },
    pubg_new_state: { src: '/assets/games/pubg-new-state-mobile.webp', fit: 'cover' },
    ragnarok_m: { src: '/assets/games/ragnarok-m-eternal-love.webp', fit: 'cover' },
    ragnarok_origin: { src: '/assets/games/ragnarok-origin.webp', fit: 'cover' },
    ragnarok_x: { src: '/assets/games/ragnarok-x-next-generation.webp', fit: 'cover' },
    revelation: { src: '/assets/games/revelation-infinite-journey.webp', fit: 'cover' },
    roblox: { src: '/assets/games/roblox.webp', fit: 'cover' },
    roblox_voucher: { src: '/assets/games/roblox-voucher.webp', fit: 'cover' },
    rush_royale: { src: '/assets/games/rush-royale.webp', fit: 'cover' },
    sausage_man: { src: '/assets/games/sausage-man.webp', fit: 'cover' },
    state_of_survival: { src: '/assets/games/state-of-survival.webp', fit: 'cover' },
    super_sus: { src: '/assets/games/super-sus.webp', fit: 'cover' },
    tarisland: { src: '/assets/games/tarisland.webp', fit: 'cover' },
    tom_and_jerry: { src: '/assets/games/tom-and-jerry-chase.webp', fit: 'cover' },
    tower_of_fantasy: { src: '/assets/games/tower-of-fantasy.webp', fit: 'cover' },
    valorant: { src: '/assets/games/valorant.webp', fit: 'contain' },
    voucher_garena_shell: { src: '/assets/games/voucher-garena-shell.webp', fit: 'cover' },
    voucher_gemscool: { src: '/assets/games/voucher-gemscool.webp', fit: 'cover' },
    voucher_google_play_id: { src: '/assets/games/voucher-google-play-indonesia.webp', fit: 'contain' },
    voucher_google_play_us: { src: '/assets/games/voucher-google-play-us.webp', fit: 'cover' },
    voucher_megaxus: { src: '/assets/games/voucher-megaxus.webp', fit: 'contain' },
    voucher_pb_zepetto: { src: '/assets/games/voucher-pb-zepetto.webp', fit: 'contain' },
    voucher_point_blank: { src: '/assets/games/voucher-point-blank.webp', fit: 'cover' },
    voucher_pubg_mobile: { src: '/assets/games/voucher-pubg-mobile.webp', fit: 'cover' },
    voucher_razer_gold: { src: '/assets/games/voucher-razer-gold.webp', fit: 'contain' },
    voucher_steam: { src: '/assets/games/voucher-steam.webp', fit: 'contain' },
    voucher_unipin: { src: '/assets/games/voucher-unipin.webp', fit: 'contain' },
    war_robots: { src: '/assets/games/war-robots.webp', fit: 'cover' },
    watcher_of_realms: { src: '/assets/games/watcher-of-realms.webp', fit: 'cover' },
    whiteout_survival: { src: '/assets/games/whiteout-survival.webp', fit: 'cover' },
    zzz: { src: '/assets/games/zenless-zone-zero.webp', fit: 'cover' },
    zepeto: { src: '/assets/games/zepeto.webp', fit: 'cover' },
  };

  function slugifyName(name) {
    return String(name || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  function resolve(category) {
    if (!category) return { src: null, fit: 'cover' };
    var key = category.key || '';
    var mapped = GAME_ASSETS[key];
    if (category.image) {
      return {
        src: category.image,
        fit: (mapped && category.image === mapped.src) ? mapped.fit : 'cover',
      };
    }
    if (mapped) return mapped;

    // Auto-match by normalized slug if admin/provider adds a game matching an asset slug
    var slug = slugifyName(category.name);
    if (slug) {
      var entries = Object.values(GAME_ASSETS);
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].src === '/assets/games/' + slug + '.webp') {
          return entries[i];
        }
      }
    }
    return { src: null, fit: 'cover' };
  }

  function initials(name) {
    var words = String(name || 'GM').trim().split(/\s+/).filter(Boolean);
    if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
    return String(words[0] || 'GM').slice(0, 2).toUpperCase();
  }

  global.WarheadGameImages = {
    ASSETS: GAME_ASSETS,
    resolve: resolve,
    initials: initials,
    slugifyName: slugifyName,
  };
})(window);
