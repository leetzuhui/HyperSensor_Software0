<template>
  <div class="user-manual-page">
    <header class="header">
      <h3>User Manual Downloads</h3>
      <p>Access the user manuals for our software below. Click to download.</p>
    </header>

    <table class="manual-table">
      <thead>
        <tr>
          <th>Manual Title</th>
          <th>Description</th>
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="manual in manuals" :key="manual.id">
          <td>{{ manual.title }}</td>
          <td>{{ manual.description }}</td>
          <td class="download-buttons">
            <a :href="manual.links.first.herf" class="download-button" target="_blank">{{ manual.links.first.text }}</a>
            <a :href="manual.links.last.herf" class="download-button" target="_blank">{{ manual.links.last.text }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UserManualPage',
  data() {
    return {
      manuals: [
        {
          id: 1,
          title: 'Quick Start Guide',
          description: 'Quickly set up and start using HyperSensor Software with step-by-step instructions.',
          links: {
            first: {
              herf: './downloads/Quick_Start_Guide_CN_v2.1.0.pdf',
              text: 'Quick_Start_Guide_CN_v2.1.0.pdf'
            },
            last: {
              herf: './downloads/Quick_Start_Guide_EN_v2.1.0.pdf',
              text: 'Quick_Start_Guide_EN_v2.1.0.pdf'
            }
          },
        },
        {
          id: 2,
          title: 'User Manual',
          description: 'A comprehensive guide to using HyperSensor Software.',
          links: {
            first: {
              herf: '/version-history/not-available',
              text: 'Not Available'
            },
            last: {
              herf: '/version-history/not-available',
              text: 'Not Available'
            },
          },
        }
      ],
    };
  },
};
</script>

<style scoped>
.user-manual-page {
  width: 80%;
  max-width: 80%;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;

  .header {
    text-align: center;
    margin-bottom: 30px;

    h3 {
      font-size: 28px;
      color: #007aff;
    }

    p {
      font-size: 16px;
      color: #555;
    }
  }

  .manual-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

    th,
    td {
      border: 1px solid #ddd;
      padding: 12px;
      text-align: left;
    }

    th {
      background-color: #007aff;
      color: white;
    }

    tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    .download-buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .download-button {
      background-color: #007aff;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 5px;
      text-decoration: none;
      transition: background-color 0.3s;
      text-align: center;
    }

    .download-button:hover {
      background-color: #0056b3;
    }
  }
}
</style>
