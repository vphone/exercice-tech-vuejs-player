// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {get} from '@loopback/rest';


export class PlayerController {
  constructor() {
  }

  @get('/player')
  hello(): object {
    return {
      "type": "vod",
      "id": "5898066",
      "stream": {
        "url": "https://mp4.ina.fr/lecture/lire/site/molotovtv/securekey/lnwnZzNQAJbHfT3OMdjkLxhyExWidLpWeoKtIDAeWz4YHOapJS5T-gSwOcxREXpx50lWYot80R0uPVbENPAeaGH63sEi2WDS.mp4",
        "video_type": "vod",
        "video_format": "MP4"
      },
      "metadata": {
        "asset_type": "vod",
        "channel_id": "159",
        "channel_name": "INA",
        "current_page": "player",
        "duration": "41",
        "episode_id": "2519870",
        "episode_number": "1",
        "episode_rating": "UNKNOWN",
        "episode_title": "Steve Jobs à propos de Apple",
        "origin_component_rank": "4",
        "origin_page": "episode",
        "program_category": "Documentaires",
        "program_category_id": "8",
        "program_id": "206998",
        "program_kind": "Science et technologie",
        "program_kind_id": "49",
        "program_seo_ranking": "0",
        "program_title": "Steve Jobs à propos de Apple",
        "season_id": "91949",
        "season_number": "0",
        "season_title": "",
        "source": ""
      },
      "overlay": {
        "type": "episode",
        "id": "2519870",
        "title": "Steve Jobs à propos de Apple",
        "title_formatter": {"format": "Steve Jobs à propos de Apple"},
        "subtitle_formatter": {"format": "Documentaire scientifique (1981) • 0min"},
        "description": "Dans son bureau de la Silicon Valley, Steve Jobs, jeune fondateur de la société Apple, explique les origines de cette entreprise de microinformatique fondée avec Steve Wozniak.",
        "description_formatter": {"format": "Dans son bureau de la Silicon Valley, Steve Jobs, jeune fondateur de la société Apple, explique les origines de cette entreprise de microinformatique fondée avec Steve Wozniak."},
        "interaction": null,
        "metadata": {
          "channel_id": "159",
          "channel_name": "INA",
          "episode_id": "2519870",
          "episode_number": "1",
          "episode_rating": "UNKNOWN",
          "episode_title": "Steve Jobs à propos de Apple",
          "program_category": "Documentaires",
          "program_category_id": "8",
          "program_id": "206998",
          "program_kind": "Science et technologie",
          "program_kind_id": "49",
          "program_seo_ranking": "0",
          "program_title": "Steve Jobs à propos de Apple"
        },
        "image_bundle": {
          "poster_tv": {
            "type": "poster",
            "source": {
              "width": 462,
              "height": 608,
              "url": "https://fusion.molotov.tv/arts/i/462x608/Cj4yPAodU3RldmUgSm9icyDDoCBwcm9wb3MgZGUgQXBwbGUSGwoU8QPlFIPrkR8JNplteqC9GhYpXqwSA2pwZwofCAESGwoUFITdvnKMuVQ4LolWdzl6As8bcXISA3BuZw/jpg"
            },
          },
        },
        "is_unique": false,
        "is_new": false,
        "ref_csa_id": "0",
        "program_slug": "1981-steve-jobs-interviewe-a-ses-debuts-chez-apple",
        "casting": {"title": "Suivez le casting de ce film", "group_index": 0},
        "hide_player_controls": false
      },
      "config": {"max_bitrate": 10000000, "max_play_duration": 28200},
    }
  }
}
