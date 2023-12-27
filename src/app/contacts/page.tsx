'use client'

import { useEffect } from "react"

import { data } from "@/src/assets/data"
import MainContainer from "@/src/components/containers/MainContainer"
import PageContainer from "@/src/components/containers/PageContainer"
import ContactPhone from "@/src/components/nodes/tel/ContactPhone"
import PageHeader from "@/src/components/ui/Headers/PageHeader"

import s from './style.module.scss'
import Script from "next/script"
import { mapsStyle } from "@/src/assets/ym/maps"
import { Metadata } from "next"

const InitMap = () => {
  const ymaps3 = (window as any).ymaps3;
  const initMap = async () => {
    await ymaps3.ready;
    const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');
    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;
    const layer = new YMapDefaultSchemeLayer({
      customization: mapsStyle,
    })
    const marker = new YMapDefaultMarker(
      {
        coordinates: [34.670254, 53.202168,],
        color: '#fdb918',
        title: `<strong>${data.name}<strong/>`,
      }
    );
    const map = new YMap(
      document.getElementById('map'),
      {
        location: {
          center: [34.670254, 53.202168,],
          zoom: 16.5
        }
      }
    );
    map.addChild(new YMapDefaultFeaturesLayer({ id: 'features' }));
    map.addChild(layer);
    map.addChild(marker);
  }
  if (ymaps3) {
    initMap()
  }
}

const ContactPage = () => {
  let mapInit = false;
  useEffect(() => {
    if (!mapInit) {
      InitMap()
      mapInit = true
    }
  }, [])

  return (
    <PageContainer>
      <MainContainer el="div">
        <PageHeader text="Контакты" />
        <Script onLoad={() => {
          InitMap()
        }} src="https://api-maps.yandex.ru/v3/?apikey=d06db591-5fc4-49dc-b421-534fde87fa06&lang=ru_RU" />
        <section itemScope itemType="http://schema.org/Organization">
          <span itemProp="name">{data.name}</span>
          <div className={s['contact-item']} itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
            Адрес:{' '}
            <span itemProp="addressLocality">{data.contact.adress.city}</span>,{' '}
            <span itemProp="streetAddress">{data.contact.adress.street}</span>,{' '}
            <span itemProp="postalCode">{data.contact.adress.postIndex}</span>
          </div>
          <br />
          <div className={s['contact-item']}>
            Телефон: <ContactPhone withoutText />
          </div>
          <div className={s['contact-item']}>
            Электронная почта: <a href={`mailto:${data.contact.email}`} itemProp="email">{data.contact.email}</a>
          </div>
        </section>
        <section className={s['map-container']}>
          <div className={s['map-container__elem']} id="map" />
        </section>
      </MainContainer>
    </PageContainer>
  )
}

export default ContactPage